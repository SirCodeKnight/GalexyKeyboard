import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Usage: node scripts/verify-seo-gates.mjs [output-directory]
// The optional directory lets the same gate check a fixture or a preview build.
const outputDir = process.argv[2]
  ? resolve(process.argv[2])
  : fileURLToPath(new URL('../dist/', import.meta.url));
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function hasFile(file) {
  const path = join(outputDir, file);
  return existsSync(path) && statSync(path).isFile();
}

function readRequired(file) {
  if (!hasFile(file)) {
    failures.push(`${file}: missing build output`);
    return '';
  }
  const content = readFileSync(join(outputDir, file), 'utf8');
  check(content.trim().length > 0, `${file}: file is empty`);
  return content;
}

function attributes(source) {
  const result = {};
  const pattern = /(?:^|\s)([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of source.matchAll(pattern)) {
    result[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? '';
  }
  return result;
}

function hasText(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&(?:nbsp|#160|#x0*a0);/gi, ' ').trim().length > 0;
}

function isHttpUrl(value) {
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

function* filesIn(directory) {
  if (!existsSync(directory) || !statSync(directory).isDirectory()) return;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* filesIn(path);
    else if (entry.isFile()) yield path;
  }
}

try {
  const home = readRequired('index.html').replace(/<!--[\s\S]*?-->/g, '');
  const robots = readRequired('robots.txt');
  readRequired('llms.txt');
  readRequired('llms-full.txt');

  const sitemaps = ['sitemap-index.xml', 'sitemap.xml'].filter(hasFile);
  check(sitemaps.length > 0, 'Missing sitemap-index.xml or sitemap.xml');
  for (const sitemap of sitemaps) readRequired(sitemap);
  const declarations = [...robots.matchAll(/^\s*Sitemap\s*:\s*(\S+)/gim)].map((match) => match[1]);
  check(declarations.length > 0, 'robots.txt: missing Sitemap declaration');
  if (declarations.length > 0) {
    check(declarations.some((url) => isHttpUrl(url) && sitemaps.includes(basename(new URL(url).pathname))),
      'robots.txt: Sitemap declaration must point to an existing sitemap-index.xml or sitemap.xml over HTTP(S)');
  }

  const discoveryFiles = ['openapi.json', '.well-known/ai-plugin.json'].filter(hasFile);
  check(discoveryFiles.length > 0, 'Missing API/manifest discovery file: openapi.json or .well-known/ai-plugin.json');
  for (const file of discoveryFiles) {
    const content = readRequired(file);
    if (!content.trim()) continue;
    try {
      const document = JSON.parse(content);
      check(document && typeof document === 'object' && !Array.isArray(document) && Object.keys(document).length > 0,
        `${file}: discovery document must be a non-empty JSON object`);
    } catch {
      failures.push(`${file}: invalid JSON`);
    }
  }

  // The homepage is the SEO entry point; all emitted text assets are scanned
  // below for release blockers, including the contact page and bundled scripts.
  if (home.trim()) {
    const head = home.match(/<head\b[^>]*>([\s\S]*?)<\/head\s*>/i)?.[1] ?? '';
    const title = head.match(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/i)?.[1] ?? '';
    check(hasText(title), 'index.html: missing or empty <title>');

    const metas = [...head.matchAll(/<meta\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)].map((match) => attributes(match[1]));
    check(metas.some((meta) => meta.name?.toLowerCase() === 'description' && hasText(meta.content ?? '')),
      'index.html: missing or empty meta description');

    const links = [...head.matchAll(/<link\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)].map((match) => attributes(match[1]));
    check(links.some((link) => link.rel?.toLowerCase().split(/\s+/).includes('canonical') && isHttpUrl(link.href)),
      'index.html: missing canonical link with an absolute HTTP(S) URL');

    const headings = [...home.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/gi)];
    check(headings.some((heading) => hasText(heading[1])), 'index.html: missing or empty <h1>');

    const jsonld = [...home.matchAll(/<script\b((?:"[^"]*"|'[^']*'|[^'">])*)>([\s\S]*?)<\/script\s*>/gi)]
      .filter((match) => attributes(match[1]).type?.toLowerCase() === 'application/ld+json');
    check(jsonld.length > 0, 'index.html: missing JSON-LD');
    for (const [index, match] of jsonld.entries()) {
      try {
        const data = JSON.parse(match[2]);
        check(data && typeof data === 'object' && Object.keys(data).length > 0,
          `index.html: JSON-LD block ${index + 1} must contain a non-empty object or array`);
      } catch {
        failures.push(`index.html: JSON-LD block ${index + 1} is invalid JSON`);
      }
    }
  }

  let scannedFiles = 0;
  for (const path of filesIn(outputDir)) {
    if (!['.html', '.js', '.mjs', '.json', '.txt', '.xml'].includes(extname(path).toLowerCase())) continue;
    scannedFiles += 1;
    const content = readFileSync(path, 'utf8');
    const label = relative(outputDir, path).split('\\').join('/');
    check(!/hello@galexykeyboard\.example/i.test(content), `${label}: contains the placeholder email hello@galexykeyboard.example`);
    const text = content.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/gi, ' ').replace(/\s+/g, ' ');
    const adBlockLock = /(?:disable|turn off)\s+(?:your\s+)?ad[ -]?blocker\s+to\s+(?:continue|use|access)|ad[ -]?blocker\s+(?:detected|is blocking access)/i;
    check(!adBlockLock.test(content) && !adBlockLock.test(text),
      `${label}: contains the hard ad-blocker lock phrase`);
  }

  if (failures.length > 0) {
    console.error(`SEO/AEO/GEO gates failed (${failures.length}):\n${failures.map((failure) => `- ${failure}`).join('\n')}`);
    process.exitCode = 1;
  } else {
    console.log(`SEO/AEO/GEO gates passed: homepage metadata, robots/sitemap, discovery files, and ${scannedFiles} text assets checked.`);
  }
} catch (error) {
  console.error(`SEO/AEO/GEO gates could not inspect ${outputDir}: ${error.message}`);
  process.exitCode = 1;
}

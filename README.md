# GalexyKeyboard

Free online multilingual virtual keyboard webtool. Pick a language, type with on-screen keys (or your remapped physical keyboard), copy the text, and send it anywhere.

Built with **Astro + Tailwind CSS**, fully static, optimized for Core Web Vitals, SEO, AEO (answer engines) and GEO (generative engines).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321/galexykeyboard
npm run build    # static output in dist/
```

## Deployment

Merging to the default branch deploys automatically to **GitLab Pages** via `.gitlab-ci.yml`.
For a custom domain set CI/CD variables `SITE_URL` (e.g. `https://galexykeyboard.com`) and `BASE_PATH` (`/`).

## Adding a language

Add one entry to `src/data/keyboards.ts` (layout rows + SEO content + FAQs). A fully optimized landing page at `/<slug>/` is generated automatically, including FAQPage / HowTo / WebApplication JSON-LD, canonical URL, OG tags and sitemap entry.

## SEO architecture

- One statically generated landing page per language targeting high-volume patterns ("arabic keyboard online", "hindi typing online", ...)
- Unique intro copy, usage steps, tips and 6-7 FAQs per page with FAQPage + HowTo + WebApplication + BreadcrumbList structured data
- Sitemap, robots.txt, llms.txt, canonical URLs, Open Graph / Twitter cards, semantic HTML, internal linking hub

## Webtool suites

- `/font-converter/` and `/legacy-font-to-unicode/` provide data-driven legacy-font converter landing pages, local copy/download controls, direction swapping, sample text and encoding detection hints.
- `/phonetic-typing/` and the English-to-language routes provide local phonetic input helpers with common-word dictionaries.
- `/typing-test/` and the language test routes provide timed WPM, net WPM, accuracy, error counts, exam-mode Backspace locking and printable local certificates.
- `/unicode-tools/` includes RTL cleanup, code-point/byte inspection, invisible-character detection and multilingual word/SMS counters.
- Every keyboard has Native Layout and Phonetic input modes plus an Embed keyboard dialog. `/embed/<keyboard-slug>/` contains the minimal embeddable view.
- The build creates both `dist/sitemap-index.xml` and the compatibility alias `dist/sitemap.xml`.

The legacy converter pages are deliberately client-side and preserve unsupported characters for review. Keep the original legacy document and verify a representative sample when working with vendor-specific font releases.

## Roadmap

- More languages (target: 100+, then 500+)
- Guides/blog section for long-tail keywords
- Katakana layer for Japanese, niqqud for Hebrew
- Desktop app (separate project)

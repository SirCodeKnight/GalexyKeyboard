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

## Roadmap

- More languages (target: 100+, then 500+)
- Guides/blog section for long-tail keywords
- Katakana layer for Japanese, niqqud for Hebrew
- Desktop app (separate project)

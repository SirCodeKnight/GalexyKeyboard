import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH can be overridden in CI for custom domains.
const SITE = process.env.SITE_URL || 'https://wowgalexy.in';
const BASE = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [tailwind(), sitemap()],
  build: { inlineStylesheets: 'auto' },
});

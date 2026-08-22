// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { satteri, satteriHeadingIdsPlugin } from '@astrojs/markdown-satteri';

import { SITE_URL } from './src/consts.ts';
import { headingAnchors } from './src/lib/heading-anchors.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [icon(), sitemap()],
  markdown: {
    processor: satteri({
      hastPlugins: [satteriHeadingIdsPlugin(), headingAnchors()],
    }),
  },
});
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { satteri, satteriHeadingIdsPlugin } from '@astrojs/markdown-satteri';

import { SITE_URL } from './src/consts.ts';
import { headingAnchors } from './src/lib/heading-anchors.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [icon(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Figtree',
      cssVariable: '--font-sans',
      options: {
        variants: [
          {
            weight: '100 900',
            style: 'normal',
            src: ['./src/assets/fonts/figtree/Figtree-VariableFont_wght.woff2'],
          },
          {
            weight: '100 900',
            style: 'italic',
            src: ['./src/assets/fonts/figtree/Figtree-Italic-VariableFont_wght.woff2'],
          },
        ],
      },
    },
  ],
  markdown: {
    processor: satteri({
      hastPlugins: [satteriHeadingIdsPlugin(), headingAnchors()],
    }),
  },
});
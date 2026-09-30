// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import { satteri, satteriHeadingIdsPlugin } from "@astrojs/markdown-satteri";

import { SITE_URL } from "./src/consts.ts";
import { headingAnchors } from "./src/lib/heading-anchors.ts";
import { calloutDirective } from "./src/lib/callout.ts";
import { externalLinks } from "./src/lib/external-links.ts";
import {
  blockExpressiveCode,
  inlineExpressiveCode,
} from "./src/lib/expressive-code/index.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [icon(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Figtree",
      cssVariable: "--font-sans",
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/figtree/Figtree-VariableFont_wght.woff2"],
          },
          {
            weight: "100 900",
            style: "italic",
            src: [
              "./src/assets/fonts/figtree/Figtree-Italic-VariableFont_wght.woff2",
            ],
          },
        ],
      },
    },
    {
      // Só para código; sem preload (ver Layout.astro).
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            weight: "100 800",
            style: "normal",
            src: [
              "./src/assets/fonts/jetbrains-mono/JetBrainsMono-latin-wght-normal.woff2",
            ],
          },
        ],
      },
    },
  ],
  markdown: {
    // O destaque de código fica com o Expressive Code (blockExpressiveCode).
    syntaxHighlight: false,
    processor: satteri({
      features: { directive: true },
      mdastPlugins: [calloutDirective, inlineExpressiveCode],
      hastPlugins: [
        externalLinks,
        satteriHeadingIdsPlugin(),
        blockExpressiveCode,
        headingAnchors(),
      ],
    }),
  },
  devToolbar: {
    enabled: false,
  },
});

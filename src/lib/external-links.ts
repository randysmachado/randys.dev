import { defineHastPlugin } from "satteri";
import { SITE_URL } from "../consts.ts";

const siteHost = new URL(SITE_URL).host;

/**
 * Links externos no conteúdo dos posts abrem em nova aba, sem dar acesso a
 * `window.opener` nem enviar `Referer`, e sem endosso de SEO (`nofollow`).
 * Porte do external-links.ts do astro-erudite; ignora links para o próprio
 * domínio (SITE_URL).
 */
export const externalLinks = defineHastPlugin({
  name: "external-links",
  element: {
    filter: ["a"],
    visit(node, ctx) {
      const href = node.properties.href;
      if (typeof href !== "string" || !/^https?:\/\//.test(href)) return;
      if (new URL(href).host === siteHost) return;
      ctx.setProperty(node, "target", "_blank");
      ctx.setProperty(node, "rel", "external nofollow noopener noreferrer");
    },
  },
});

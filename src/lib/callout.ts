import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { ElementContent } from "hast";
import type {} from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";
import { h } from "hastscript";
import { defineMdastPlugin } from "satteri";

/**
 * Callouts `:::note`, `:::tip`, `:::warning`, `:::caution`, `:::important`
 * (porte do astro-erudite, src/lib/callout.ts). Viram `<details data-callout>`
 * recolhíveis com ícone, título e seta.
 *
 *   :::note            → título padrão ("Nota")
 *   :::note[Meu texto] → "Nota (Meu texto)"
 *   :::note{closed}    → começa fechado
 *
 * Ícones: Solar Icons (CC BY 4.0), os mesmos do astro-erudite.
 */

const ICONS_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  "../assets/icons/callouts",
);

const loadIcon = (name: string) =>
  readFileSync(join(ICONS_DIR, `${name}.svg`), "utf8")
    .replace("<svg", '<svg aria-hidden="true"')
    .replace(/\s+/g, " ")
    .trim();

const VARIANTS: Record<string, { icon: string; title: string }> = {
  note: { icon: "info-circle", title: "Nota" },
  tip: { icon: "lightbulb", title: "Dica" },
  warning: { icon: "danger-triangle", title: "Atenção" },
  caution: { icon: "shield-warning", title: "Cuidado" },
  important: { icon: "bell", title: "Importante" },
};

const icons: Record<string, string> = {};
for (const name of [
  ...new Set(Object.values(VARIANTS).map((variant) => variant.icon)),
  "alt-arrow-down",
]) {
  icons[name] = loadIcon(name);
}

const raw = (value: string): ElementContent =>
  ({ type: "raw", value }) as unknown as ElementContent;

export const calloutDirective = defineMdastPlugin({
  name: "callout-directive",
  containerDirective(node, ctx) {
    const variant = VARIANTS[node.name];
    if (!variant) return;

    const first = node.children?.[0];
    const isLabel =
      first?.type === "paragraph" &&
      (first.data as { directiveLabel?: boolean })?.directiveLabel === true;

    const icon = icons[variant.icon];
    const chevron = icons["alt-arrow-down"];

    if (isLabel) {
      ctx.setProperty(first, "data", { hName: "summary" });
      ctx.prependChild(first, {
        type: "html",
        value: `${icon}<span>${variant.title}<span> (`,
      });
      ctx.appendChild(first, {
        type: "html",
        value: `)</span></span>${chevron}`,
      });
    } else {
      const summary = toHtml(
        h("summary", [raw(icon), h("span", variant.title), raw(chevron)]),
        { allowDangerousHtml: true },
      );
      ctx.prependChild(node, { type: "html", value: summary });
    }

    const closed = !!node.attributes && "closed" in node.attributes;

    ctx.setProperty(node, "data", {
      hName: "details",
      hProperties: {
        dataCallout: node.name,
        open: !closed,
      },
    });
  },
});

import GithubSlugger from "github-slugger";
import { h } from "hastscript";
import { defineHastPlugin } from "satteri";

/**
 * Gera o id de cada título (mesmo slug do Astro: github-slugger sobre o
 * texto) e acrescenta o link "#" da seção. O plugin é criado uma vez na
 * config e reaproveitado em todos os posts, então o slugger fica por
 * documento — chaveado no `ctx.data`, novo a cada renderização. Um slugger
 * único somaria sufixos entre posts ("conclusão-4") e mudaria os ids conforme
 * a ordem do build.
 */
export function headingAnchors() {
  const sluggers = new WeakMap<object, GithubSlugger>();
  return defineHastPlugin({
    name: "heading-anchors",
    element: {
      filter: ["h2", "h3", "h4", "h5", "h6"],
      visit(node, ctx) {
        let slugger = sluggers.get(ctx.data);
        if (!slugger) sluggers.set(ctx.data, (slugger = new GithubSlugger()));

        const existing = node.properties.id;
        const id =
          typeof existing === "string" && existing
            ? existing
            : slugger.slug(ctx.textContent(node));
        if (!id) return;
        if (existing !== id) ctx.setProperty(node, "id", id);
        ctx.appendChild(
          node,
          h("a", {
            dataHeadingAnchor: "",
            href: `#${id}`,
            ariaLabel: "Link para esta seção",
            tabIndex: -1,
          }),
        );
      },
    },
  });
}

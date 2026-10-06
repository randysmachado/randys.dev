import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getImage } from "astro:assets";
import { getCollection } from "astro:content";

import { SITE_DESCRIPTION, SITE_TITLE } from "@/consts";
import { getCategory } from "@/lib/categories";

/**
 * Remove do HTML renderizado o que só serve na página: <style>/<script> e o
 * botão de copiar do Expressive Code, as cores dos tokens (variáveis CSS que
 * leitores de RSS ignoram) e os links "#" dos títulos.
 */
const cleanForFeed = (html: string): string =>
  html
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<div class="copy">[\s\S]*?<\/button><\/div>/g, "")
    .replace(/<a data-heading-anchor[^>]*><\/a>/g, "")
    .replace(/ style="--0:[^"]*"/g, "");

/**
 * O HTML renderizado usa caminhos relativos ao site (/_astro/…, /blog/…) e
 * âncoras (#…); leitores de RSS precisam de URLs absolutas.
 */
const absolutize = (html: string, site: URL, postUrl: URL): string =>
  html
    .replace(/(href|src)="#/g, `$1="${postUrl.href}#`)
    .replace(/(href|src)="\/(?!\/)/g, `$1="${site.origin}/`)
    .replace(/srcset="([^"]*)"/g, (_, set: string) =>
      `srcset="${set.replace(/(^|,\s*)\/(?!\/)/g, `$1${site.origin}/`)}"`,
    );

/** Escapa texto puro para entrar como HTML no feed. */
const escapeHtml = (text: string): string =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET(context: APIContext) {
  const site = context.site!;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );

  const items = await Promise.all(
    posts.map(async (post) => {
      const { title, description, publishDate, categories, tags, image } =
        post.data;
      const postUrl = new URL(`/blog/${post.id}/`, site);

      // Capa no topo do conteúdo (mesmo recorte 1200×630 do og:image).
      const cover = image
        ? await getImage({
            src: image,
            width: 1200,
            height: 630,
            fit: "cover",
            format: "jpg",
          })
        : undefined;
      const coverHtml = cover
        ? `<p><img src="${new URL(cover.src, site).href}" alt="" width="1200" height="630" /></p>`
        : "";
      const body = post.rendered?.html
        ? absolutize(cleanForFeed(post.rendered.html), site, postUrl)
        : `<p>${escapeHtml(description)}</p>`;

      return {
        title,
        description,
        pubDate: publishDate,
        link: postUrl.pathname,
        categories: [
          ...categories.map((slug) => getCategory(slug).label),
          ...(tags ?? []),
        ],
        content: coverHtml + body,
      };
    }),
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site,
    items,
    stylesheet: "/rss/styles.xsl",
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData: [
      "<language>pt-BR</language>",
      `<atom:link href="${new URL("rss.xml", site).href}" rel="self" type="application/rss+xml" />`,
    ].join(""),
  });
}

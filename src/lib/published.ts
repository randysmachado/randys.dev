import type { CollectionEntry } from "astro:content";

/**
 * Filtro de `getCollection("blog", isPublished)`: rascunhos (`draft: true`)
 * aparecem no `astro dev`, mas ficam fora do build de produção.
 */
export const isPublished = ({ data }: CollectionEntry<"blog">): boolean =>
  import.meta.env.PROD ? data.draft !== true : true;

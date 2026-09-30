import { CATEGORIES, type CategorySlug } from "@/consts";

export type Category = (typeof CATEGORIES)[number];

export const getCategory = (slug: CategorySlug): Category =>
  CATEGORIES.find((category) => category.slug === slug)!;

export const categoryUrl = (slug: CategorySlug): string =>
  `/blog/categoria/${slug}`;

/** Slugs de `CATEGORIES` que têm ao menos um post, na ordem definida em consts. */
export const categoriesWithPosts = (
  posts: { data: { categories: readonly CategorySlug[] } }[],
): CategorySlug[] =>
  CATEGORIES.map((category) => category.slug).filter((slug) =>
    posts.some((post) => post.data.categories.includes(slug)),
  );

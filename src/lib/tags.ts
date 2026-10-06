/**
 * Slug de URL da tag: sem acentos, minúsculo, espaços viram hífen e qualquer
 * outro caractere fora de a-z/0-9/- some ("CI/CD" → "cicd", "C#" → "c").
 */
export const tagSlug = (tag: string): string =>
  tag
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");

export const tagUrl = (tag: string): string => `/tag/${tagSlug(tag)}/`;

/** Tags distintas dos posts (por slug), em ordem alfabética. */
export const allTags = (posts: { data: { tags?: string[] } }[]): string[] => {
  const bySlug = new Map<string, string>();
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      if (!bySlug.has(tagSlug(tag))) bySlug.set(tagSlug(tag), tag);
    }
  }
  return [...bySlug.values()].sort((a, b) => a.localeCompare(b, "pt-BR"));
};

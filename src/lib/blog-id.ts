/** Pasta de post no formato `AAAA-MM-DD-slug` (ver planejamento/0043). */
const POST_FOLDER = /^(\d{4}-\d{2}-\d{2})-(.+)$/;

/**
 * `id` do post, que vira a URL `/blog/<id>/`. O prefixo de data só organiza as
 * pastas: tem que bater com `publishDate` e não entra na URL.
 */
export const blogId = (
  entry: string,
  data: Record<string, unknown>,
): string => {
  const folder = entry.split("/")[0];
  const match = POST_FOLDER.exec(folder);
  if (!match) {
    throw new Error(
      `${entry}: a pasta do post deve começar com AAAA-MM-DD- (ex.: 2026-10-27-titulo).`,
    );
  }

  const [, date, slug] = match;
  const publishDate = new Date(data.publishDate as string | Date);
  if (
    Number.isNaN(publishDate.getTime()) ||
    publishDate.toISOString().slice(0, 10) !== date
  ) {
    throw new Error(
      `${entry}: a data da pasta (${date}) não bate com publishDate.`,
    );
  }

  return slug;
};

/**
 * Datas do frontmatter (`2026-09-30`) chegam como meia-noite UTC. Formatar
 * em UTC evita que o fuso da máquina do build (ex.: UTC−3) volte um dia.
 */
const longDate = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** Ex.: "30 de setembro de 2026". */
export const formatDate = (date: Date): string => longDate.format(date);

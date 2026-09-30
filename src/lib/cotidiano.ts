import { getCollection, type CollectionEntry } from "astro:content";
import { COTIDIANO_TYPES, type CotidianoType } from "@/consts";

export type CotidianoItem = CollectionEntry<"cotidiano">;
export type CotidianoTypeInfo = (typeof COTIDIANO_TYPES)[number];

export const getCotidianoType = (slug: CotidianoType): CotidianoTypeInfo =>
  COTIDIANO_TYPES.find((type) => type.slug === slug)!;

const byRecent = (a: CotidianoItem, b: CotidianoItem) =>
  b.data.date.getTime() - a.data.date.getTime();

/** Datas do JSON chegam como meia-noite UTC: ano/mês sempre em UTC. */
const yearOf = (item: CotidianoItem) => item.data.date.getUTCFullYear();

const monthName = new Intl.DateTimeFormat("pt-BR", {
  month: "long",
  timeZone: "UTC",
});

export async function getCotidiano() {
  const all = (await getCollection("cotidiano")).sort(byRecent);
  const now = all.filter((item) => item.data.status === "atual");
  const done = all.filter((item) => item.data.status === "concluido");
  const years = [...new Set(done.map(yearOf))].sort((a, b) => b - a);
  return { now, done, years };
}

export type CotidianoMonth = { key: string; label: string; items: CotidianoItem[] };

/** Itens concluídos de um ano, agrupados por mês (mais recente primeiro). */
export function monthsOf(done: CotidianoItem[], year: number): CotidianoMonth[] {
  const months = new Map<number, CotidianoItem[]>();
  for (const item of done.filter((i) => yearOf(i) === year)) {
    const month = item.data.date.getUTCMonth();
    months.set(month, [...(months.get(month) ?? []), item]);
  }
  return [...months.entries()]
    .sort(([a], [b]) => b - a)
    .map(([month, items]) => ({
      key: `${year}-${String(month + 1).padStart(2, "0")}`,
      label: monthName.format(new Date(Date.UTC(year, month, 1))),
      items,
    }));
}

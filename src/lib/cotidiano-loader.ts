import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import type { Loader } from "astro/loaders";
import { slug } from "github-slugger";

import { COTIDIANO_TYPES, type CotidianoType } from "@/consts";

/** Grupo do JSON ("livros") → tipo ("livro"), a partir de COTIDIANO_TYPES. */
const TIPO_POR_GRUPO = new Map<string, CotidianoType>(
  COTIDIANO_TYPES.map((t) => [t.grupo, t.slug]),
);

/**
 * Lê um arquivo do ano: um objeto com um grupo por tipo ("livros": [...]).
 * O tipo vem da chave do grupo, então cada item não repete `type`.
 */
const itensDoArquivo = (file: string, conteudo: unknown): Record<string, unknown>[] => {
  if (typeof conteudo !== "object" || conteudo === null || Array.isArray(conteudo)) {
    throw new Error(`Cotidiano: ${file} deve ser um objeto com um grupo por tipo (ex.: "livros": [ ... ]).`);
  }

  const itens: Record<string, unknown>[] = [];
  for (const [grupo, lista] of Object.entries(conteudo)) {
    const tipo = TIPO_POR_GRUPO.get(grupo);
    if (!tipo) {
      const validos = [...TIPO_POR_GRUPO.keys()].join(", ");
      throw new Error(`Cotidiano: grupo "${grupo}" em ${file} não existe. Use: ${validos}.`);
    }
    if (!Array.isArray(lista)) {
      throw new Error(`Cotidiano: o grupo "${grupo}" em ${file} deve ser uma lista ([ ... ]).`);
    }
    for (const item of lista as Record<string, unknown>[]) {
      if ("type" in item) {
        throw new Error(`Cotidiano: remova "type" de um item de "${grupo}" em ${file}: o grupo já define o tipo.`);
      }
      itens.push({ ...item, type: tipo });
    }
  }
  return itens;
};

/**
 * Carrega os itens do Cotidiano: todos os `*.json` de uma pasta (um arquivo
 * por ano, agrupado por tipo). Diferente do `file()` do Astro, lê vários
 * arquivos e gera o `id` sozinho (`AAAA-MM-DD-titulo`), então os itens não
 * precisam de `id` escrito à mão. No `astro dev`, recarrega quando um arquivo
 * da pasta muda.
 */
export function cotidianoLoader(dir: string): Loader {
  return {
    name: "cotidiano-loader",
    load: async ({ config, store, parseData, generateDigest, logger, watcher }) => {
      const base = fileURLToPath(new URL(dir, config.root));

      /** Lê e valida todos os arquivos; lança na primeira falha, sem tocar no store. */
      const read = async () => {
        const files = (await readdir(base)).filter((f) => f.endsWith(".json")).sort();
        const entries: { id: string; data: Record<string, unknown> }[] = [];
        const ids = new Set<string>();

        for (const file of files) {
          const path = join(base, file);
          let conteudo: unknown;
          try {
            conteudo = JSON.parse(await readFile(path, "utf8"));
          } catch (error) {
            throw new Error(`Cotidiano: JSON inválido em ${relative(process.cwd(), path)}: ${(error as Error).message}`);
          }

          for (const item of itensDoArquivo(relative(process.cwd(), path), conteudo)) {
            const baseId = `${String(item.date ?? "")}-${slug(String(item.title ?? ""))}`;
            let id = baseId;
            for (let n = 2; ids.has(id); n++) id = `${baseId}-${n}`;
            ids.add(id);
            entries.push({ id, data: await parseData({ id, data: item, filePath: path }) });
          }
        }
        return { entries, fileCount: files.length };
      };

      const sync = async () => {
        const { entries, fileCount } = await read();
        store.clear();
        for (const { id, data } of entries) store.set({ id, data, digest: generateDigest(data) });
        logger.info(`${entries.length} itens carregados de ${fileCount} arquivo(s)`);
      };

      // No build, um erro aqui interrompe com a mensagem acima (comportamento desejado).
      await sync();

      watcher?.add(base);
      // No dev, um arquivo inválido vira log e mantém os itens anteriores até ser corrigido.
      const onChange = async (changed: string) => {
        if (!changed.startsWith(base) || !changed.endsWith(".json")) return;
        try {
          await sync();
        } catch (error) {
          logger.error((error as Error).message);
        }
      };
      watcher?.on("change", onChange);
      watcher?.on("add", onChange);
      watcher?.on("unlink", onChange);
    },
  };
}

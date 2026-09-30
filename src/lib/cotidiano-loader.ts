import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import type { Loader } from "astro/loaders";
import { slug } from "github-slugger";

/**
 * Carrega os itens do Cotidiano: todos os `*.json` de uma pasta (um arquivo
 * por ano, cada um com um array de itens). Diferente do `file()` do Astro,
 * lê vários arquivos e gera o `id` sozinho (`AAAA-MM-DD-titulo`), então os
 * itens não precisam de `id` escrito à mão. No `astro dev`, recarrega quando
 * um arquivo da pasta muda.
 */
export function cotidianoLoader(dir: string): Loader {
  return {
    name: "cotidiano-loader",
    load: async ({ config, store, parseData, generateDigest, logger, watcher }) => {
      const base = fileURLToPath(new URL(dir, config.root));

      const sync = async () => {
        store.clear();
        const files = (await readdir(base)).filter((f) => f.endsWith(".json")).sort();

        for (const file of files) {
          const path = join(base, file);
          let items: unknown;
          try {
            items = JSON.parse(await readFile(path, "utf8"));
          } catch (error) {
            throw new Error(`Cotidiano: JSON inválido em ${relative(process.cwd(), path)}: ${(error as Error).message}`);
          }
          if (!Array.isArray(items)) {
            throw new Error(`Cotidiano: ${file} deve conter uma lista ([ ... ]) de itens.`);
          }

          for (const item of items as Record<string, unknown>[]) {
            const baseId = `${String(item.date ?? "")}-${slug(String(item.title ?? ""))}`;
            let id = baseId;
            for (let n = 2; store.has(id); n++) id = `${baseId}-${n}`;

            const data = await parseData({ id, data: item, filePath: path });
            store.set({ id, data, digest: generateDigest(data) });
          }
        }
        logger.info(`${store.keys().length} itens carregados de ${files.length} arquivo(s)`);
      };

      await sync();

      watcher?.add(base);
      const onChange = async (changed: string) => {
        if (changed.startsWith(base) && changed.endsWith(".json")) await sync();
      };
      watcher?.on("change", onChange);
      watcher?.on("add", onChange);
      watcher?.on("unlink", onChange);
    },
  };
}

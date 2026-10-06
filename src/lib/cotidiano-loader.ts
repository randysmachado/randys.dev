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

      /** Lê e valida todos os arquivos; lança na primeira falha, sem tocar no store. */
      const read = async () => {
        const files = (await readdir(base)).filter((f) => f.endsWith(".json")).sort();
        const entries: { id: string; data: Record<string, unknown> }[] = [];
        const ids = new Set<string>();

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

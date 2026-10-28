// Cria a pasta de um post novo: `npm run p -- "Título" [--c categoria]`.
// Não usa dependências: lê as categorias de src/consts.ts como texto.
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pastaBlog = join(raiz, "src/content/blog");
const arquivoConsts = join(raiz, "src/consts.ts");

const falhar = (mensagem) => {
  console.error(`novo-post: ${mensagem}`);
  process.exit(1);
};

/** Mesma normalização de `tagSlug` (src/lib/tags.ts), aplicada ao título. */
const slugDe = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");

/** Slugs de `CATEGORIES` em src/consts.ts (fonte única das categorias). */
const categoriasValidas = () => {
  const bloco = readFileSync(arquivoConsts, "utf8").match(
    /export const CATEGORIES = \[([\s\S]*?)\] as const;/,
  );
  if (!bloco) falhar("não achei `CATEGORIES ... as const` em src/consts.ts.");
  const slugs = [...bloco[1].matchAll(/slug:\s*"([a-z-]+)"/g)].map((m) => m[1]);
  if (slugs.length === 0) falhar("nenhum slug encontrado em CATEGORIES.");
  return slugs;
};

const args = process.argv.slice(2);
const posCategoria = args.indexOf("--c");
const categoria = posCategoria === -1 ? "dev" : args[posCategoria + 1];
const titulo = (
  posCategoria === -1
    ? args
    : [...args.slice(0, posCategoria), ...args.slice(posCategoria + 2)]
).join(" ").trim();

if (!titulo) falhar('informe o título: npm run p -- "Título do post"');

const validas = categoriasValidas();
if (!validas.includes(categoria)) {
  falhar(`categoria "${categoria}" inválida. Use uma de: ${validas.join(", ")}.`);
}

const slug = slugDe(titulo);
if (!slug) falhar("o título não gera um slug válido (use letras ou números).");

// O id do post é o slug sem a data (src/lib/blog-id.ts): dois posts com o
// mesmo slug colidiriam na URL, então a checagem vale para todas as pastas.
const slugsExistentes = readdirSync(pastaBlog).map((pasta) =>
  pasta.replace(/^\d{4}-\d{2}-\d{2}-/, ""),
);
if (slugsExistentes.includes(slug)) {
  falhar(`já existe um post com o slug "${slug}". Escolha outro título.`);
}

const agora = new Date();
const data = [
  agora.getFullYear(),
  String(agora.getMonth() + 1).padStart(2, "0"),
  String(agora.getDate()).padStart(2, "0"),
].join("-");

const pasta = join(pastaBlog, `${data}-${slug}`);
if (existsSync(pasta)) falhar(`a pasta ${relative(raiz, pasta)} já existe.`);

const arquivo = join(pasta, "index.md");
mkdirSync(pasta);
writeFileSync(
  arquivo,
  [
    "---",
    `title: ${JSON.stringify(titulo)}`,
    `description: ""`,
    `publishDate: ${data}`,
    `categories: [${JSON.stringify(categoria)}]`,
    "draft: true",
    "---",
    "",
    "",
  ].join("\n"),
);

console.log(`Criado: ${relative(raiz, arquivo)}`);
console.log("Rascunho (draft: true). Troque para false quando for publicar.");

// Abre no VS Code se o comando `code` estiver disponível; senão só o caminho.
const abrir = spawnSync("code", [arquivo], { stdio: "ignore" });
if (abrir.error || abrir.status !== 0) {
  console.log("(comando `code` indisponível: abra o arquivo manualmente)");
}

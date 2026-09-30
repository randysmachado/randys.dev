import type { NavLink, SocialLink } from "@/types";

export const SITE_TITLE = "Randys Machado";
export const SITE_DESCRIPTION =
  "Blog pessoal do Randys Machado: tecnologia, programação e outros assuntos.";
export const SITE_URL = "https://randys.dev";

/** Google Analytics 4 (mesma propriedade do site v2.0). Só carrega em produção. */
export const GA_MEASUREMENT_ID = "G-HF875P0P6L";
/** Conta do Google AdSense (meta de verificação + public/ads.txt). */
export const ADSENSE_CLIENT = "ca-pub-2668671765911701";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Blog" },
  { href: "/projetos/", label: "Projetos" },
  { href: "/cotidiano/", label: "Cotidiano" },
  { href: "/sobre/", label: "Sobre" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/randysmachado", label: "GitHub", icon: "github" },
  { href: "https://x.com/randysmachado", label: "X", icon: "x" },
];

/**
 * Categorias pré-definidas dos posts. `color` é um tom de destaque do Flexoki
 * (ver `src/styles/categories.css`); `description` aparece na home e na página
 * da categoria.
 */
export const CATEGORIES = [
  {
    slug: "dev",
    label: "Dev",
    description: "desenvolvimento e tecnologia",
    color: "blue",
  },
  {
    slug: "miscelanea",
    label: "Miscelânea",
    description: "um pouco de tudo",
    color: "orange",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const BLOG_POSTS_PER_PAGE = 10;

/** Quantidade de posts exibidos em cada bloco de categoria (Dev, Miscelânea) na home. */
export const HOME_POSTS_PER_CATEGORY = 2;

/**
 * Tipos de item da página Cotidiano (src/content/cotidiano/*.json).
 * `verb` aparece na flag do destaque "Agora"; `color` é um tom Flexoki
 * (src/styles/categories.css). Para um tipo novo, basta acrescentar aqui.
 */
export const COTIDIANO_TYPES = [
  { slug: "livro", label: "Livro", plural: "Livros", verb: "lendo", color: "blue" },
  { slug: "artigo", label: "Artigo", plural: "Artigos", verb: "lendo", color: "cyan" },
  { slug: "serie", label: "Série", plural: "Séries", verb: "assistindo", color: "purple" },
  { slug: "filme", label: "Filme", plural: "Filmes", verb: "assistindo", color: "orange" },
  { slug: "anime", label: "Anime", plural: "Animes", verb: "assistindo", color: "magenta" },
  { slug: "documentario", label: "Documentário", plural: "Documentários", verb: "assistindo", color: "green" },
] as const;

export type CotidianoType = (typeof COTIDIANO_TYPES)[number]["slug"];

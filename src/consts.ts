import type { NavLink, SocialLink } from "@/types";

export const SITE_TITLE = "Randys Machado";
export const SITE_DESCRIPTION =
  "Blog pessoal do Randys Machado: tecnologia, programação e outros assuntos.";
export const SITE_URL = "https://randys.dev";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "", label: "GitHub", icon: "github" },
  { href: "", label: "x", icon: "x" },
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

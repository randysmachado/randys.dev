import type { NavLink, SocialLink } from "@/types";

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

export const CATEGORIES = [
  { slug: "dev", label: "Dev" },
  { slug: "blog", label: "Blog" },
  { slug: "viagens", label: "Viagens" },
  { slug: "ferias", label: "Férias" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const SITE_TITLE = "Randys Machado";
export const SITE_DESCRIPTION =
  "Blog pessoal do Randys Machado: tecnologia, programação e outros assuntos.";
export const SITE_URL = "https://randys.dev";

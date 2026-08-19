import type { NavLink, SocialLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "", label: "GitHub", icon: "github" },
  { href: "", label: "x", icon: "x" },
];

export const SITE_TITLE = "My Awesome Blog";
export const SITE_DESCRIPTION = "Insights and stories from my coding journey.";
export const SITE_URL = "https://www.myawesomeblog.com";

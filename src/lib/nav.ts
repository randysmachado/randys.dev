/**
 * Indica se `href` corresponde à página atual (Home só em "/", demais por
 * prefixo de segmento). Aceita `href`/`pathname` com ou sem barra final.
 */
export const isActive = (href: string, pathname: string): boolean => {
  const base = href.replace(/\/$/, "");
  return base === ""
    ? pathname === "/"
    : pathname === base || pathname.startsWith(`${base}/`);
};

/** Indica se `href` corresponde à página atual (Home só em "/", demais por prefixo de segmento). */
export const isActive = (href: string, pathname: string): boolean =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

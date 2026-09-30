import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

import { CATEGORIES, type CategorySlug } from "@/consts";

const categorySlugs = CATEGORIES.map((c) => c.slug) as [
  CategorySlug,
  ...CategorySlug[],
];

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      /** Resumo curto para os cards; sem ele, os cards usam `description`. */
      summary: z
        .string()
        .max(100, "summary deve ter no máximo 100 caracteres")
        .optional(),
      publishDate: z.date(),
      image: image().optional(),
      /** Texto alternativo da capa; sem ele, a capa é tratada como decorativa. */
      imageAlt: z.string().optional(),
      categories: z.array(z.enum(categorySlugs)).min(1),
      tags: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      image: image().optional(),
      link: z.url(),
      featured: z.boolean().default(false),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog, projects };

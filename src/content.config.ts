import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

import {
  CATEGORIES,
  COTIDIANO_TYPES,
  type CategorySlug,
  type CotidianoType,
} from "@/consts";
import { cotidianoLoader } from "@/lib/cotidiano-loader";

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
      /** Data da última atualização relevante ("atualizado em …" no post). */
      updatedDate: z.date().optional(),
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
      /** Obrigatória: aparece no card e na página do projeto. */
      image: image(),
      /** Só http(s): o link vira href na página. */
      link: z.url({ protocol: /^https?$/ }),
      /** Tecnologias usadas no projeto (badges neutros na página do projeto). */
      technologies: z.array(z.string()).default([]),
      tags: z.array(z.string()).optional(),
    }),
});

const cotidianoTypes = COTIDIANO_TYPES.map((t) => t.slug) as [
  CotidianoType,
  ...CotidianoType[],
];

/** O que o Randys está lendo/assistindo: um JSON por ano em src/content/cotidiano/. */
const cotidiano = defineCollection({
  loader: cotidianoLoader("./src/content/cotidiano/"),
  schema: z.object({
    title: z.string(),
    type: z.enum(cotidianoTypes),
    /** Quando terminou (ou quando começou, se ainda está em andamento). */
    date: z.coerce.date(),
    status: z.enum(["atual", "concluido"]).default("concluido"),
    /** Ex.: "Temporada 1", "Capítulo 5". */
    detail: z.string().optional(),
    /** Autor, diretor ou estúdio. */
    author: z.string().optional(),
    /** Só http(s): o link vira href na página. */
    url: z.url({ protocol: /^https?$/ }).optional(),
  }),
});

export const collections = { blog, projects, cotidiano };

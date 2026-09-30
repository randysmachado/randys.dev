# randys.dev

Blog pessoal do **Randys Machado** — tecnologia, programação e o que mais der vontade de escrever. Publicado em [randys.dev](https://randys.dev).

Versão **3.0**, feita com [Astro](https://astro.build). A versão anterior (2.0, em Next.js) está preservada na tag `v2.0`.

## Stack

- **Astro 7**, site estático.
- **Markdown** processado pelo Sätteri, com plugins próprios em `src/lib/`: links de âncora nos títulos, links externos, callouts (`:::note`, `:::tip`…) e código com [Expressive Code](https://expressive-code.com/).
- **CSS nativo**, sem framework: tokens em `src/styles/` (paleta [Flexoki](https://stephango.com/flexoki), tipografia fluida) e `<style>` escopado em cada componente.
- **Fontes** Figtree e JetBrains Mono, servidas pela Fonts API do Astro.
- **SEO**: sitemap, RSS com conteúdo completo (`/rss.xml`), Open Graph 1200×630 gerado no build e JSON-LD.
- Hospedagem na **Vercel** (`vercel.json`).

## Comandos

Requer Node.js 22.12 ou superior.

```sh
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:4321
npm run build     # build de produção em ./dist
npm run preview   # serve o build de produção localmente
npx astro check   # checagem de tipos
```

## Conteúdo

```text
src/content/
├── blog/<slug>/index.md       # posts (a pasta vira a URL /blog/<slug>/)
└── projects/<slug>/index.md   # projetos (/projetos/<slug>/)
```

Frontmatter de um post:

```yaml
title: "Título"
description: "Descrição usada em SEO e redes sociais"
summary: "Resumo curto para os cards (opcional, até 100 caracteres)"
publishDate: 2026-09-30
updatedDate: 2026-10-15   # opcional: mostra "atualizado em …"
image: ./cover.png        # opcional: capa (imagem social 1200×630 gerada no build)
imageAlt: "…"             # opcional
categories: ["dev"]       # "dev" ou "miscelanea"
tags: ["css", "astro"]
```

Projetos exigem `image` e `link`, e aceitam `technologies: ["Astro", …]`.

**Posts de teste:** pastas começando com `exemplo-` (ex.: `src/content/blog/exemplo-teste/`) aparecem no blog local, mas são ignoradas pelo git e nunca são publicadas.

## Publicação

Um push na `main` publica em produção na Vercel; pushes em outras branches geram só um preview.

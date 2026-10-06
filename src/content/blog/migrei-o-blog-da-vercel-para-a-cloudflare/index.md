---
title: "Migrei o blog da Vercel para a Cloudflare"
description: "Como tirei o blog da Vercel e coloquei na Cloudflare Workers sem deixar o site fora do ar: DNS, DNSSEC, redirects, headers, deploy automático e as armadilhas que apareceram no caminho."
summary: "Tirei o blog da Vercel e coloquei na Cloudflare, sem queda. O passo a passo e as armadilhas."
publishDate: 2026-10-06
image: './cover.png'
categories: ["dev"]
tags: ["cloudflare", "astro", "dns", "migracao"]
---

Poucos dias depois de [lançar a nova versão do blog em Astro](/blog/nova-versao-do-blog-de-nextjs-para-astro/), resolvi mexer em mais uma coisa: a hospedagem. O blog saiu da Vercel e agora roda na [Cloudflare](https://www.cloudflare.com/). Neste post eu conto por que mudei, o que precisei fazer no DNS e no código, e as armadilhas que quase me pegaram no caminho.

## Por que sair da Vercel

A Vercel sempre funcionou bem. Não foi uma fuga, foi uma escolha. Os motivos:

- **O site é estático.** Depois da migração para o Astro, o blog virou só HTML, CSS e um pouco de JavaScript. Não preciso de nada específico da Vercel para servir isso.
- **Tudo num lugar só.** Com o domínio, o DNS e a hospedagem na Cloudflare, fica um painel a menos para cuidar.
- **Experiência.** Comecei (muito tarde) a utilizar a Cloudflare e como eles tem uma boa integração com o Astro, resolvi testar. O blog é um bom projeto para isso.
- **O que vem por aí.** Quero adicionar algumas coisas interativas no blog (um botão de curtir, por exemplo), e a Cloudflare tem banco de dados (D1) e armazenamento (KV) no plano gratuito, quero aproveitar para testar essas coisas.
- **É gratuito.** O plano free da Cloudflare cobre com folga um blog pessoal.

## Workers ou Pages?

A Cloudflare tem dois produtos que servem site estático: o Pages e o Workers. Hoje ela recomenda o **Workers com assets estáticos** para projetos novos, e a [documentação do Astro](https://docs.astro.build/en/guides/deploy/cloudflare/) segue a mesma linha. Como o blog é 100% estático, nem precisei do adapter do Astro para a Cloudflare: o Worker só entrega os arquivos que o `astro build` gera.

## Parte 1: o DNS

Essa foi a parte mais delicada, porque eu pensei em trocar tudo de uma vez e de qual jeito, daí eu pesquisei antes de fazer e descobri que a ordem de fazer as coisas importa. 

O meu domínio foi registrado no finado Google Domains, que foi vendido para a Squarespace (e até hoje não entendi o porque, coisas do Google). Então o domínio continua registrado lá, o que mudou foi quem responde pelo DNS. Isso é diferente de transferir o domínio: troquei só os **nameservers**.

### A varredura não encontra tudo

Quando você adiciona um domínio na Cloudflare, ela faz uma varredura e importa os registros DNS que encontra. Ela achou o registro principal, os de e-mail e alguns outros. Mas **não achou três subdomínios** que apontam para outros projetos meus na Vercel, nem um registro de verificação do Google.

A varredura só encontra o que ela consegue adivinhar. Subdomínios com nomes próprios ficam de fora. Se eu tivesse confiado na lista importada, três sites teriam saído do ar na hora da troca.

:::tip[compare antes de trocar]
Abra a lista completa de registros no painel e compare, linha por linha, com o que a Cloudflare importou.
:::

### O DNSSEC precisa ser desligado antes

O domínio estava com **DNSSEC** ligado. O DNSSEC assina as respostas do DNS, e a assinatura fica cadastrada no registro do domínio (o registro DS). Se você troca os nameservers com o DNSSEC ligado, os resolvedores continuam esperando a assinatura antiga (da Squarespace), daí recebem respostas da Cloudflare sem ela e **recusam o domínio**. O site some.

Então a ordem foi:

1. Desligar o DNSSEC na Squarespace.
2. Esperar o registro DS sair do registro do `.dev` e o cache dele expirar. O DS tinha TTL de 30 minutos, então esperei esse tempo depois que ele sumiu.
3. Só então trocar os nameservers para os da Cloudflare.

:::tip[IMPORTANTE]
Pesquisem no momento de fazer a troca para não ficar com o site fora do ar e evitar surpresas e dor de cabeça. O DNSSEC é uma armadilha que pega muita gente.
:::

## Parte 2: o código

No repositório, a mudança foi pequena. Saiu o `vercel.json` e entraram quatro arquivos.

### wrangler.jsonc

O [Wrangler](https://developers.cloudflare.com/workers/wrangler/) é a ferramenta de linha de comando da Cloudflare. Ele lê esse arquivo para saber o que publicar:

```jsonc title="wrangler.jsonc"
{
  "name": "randys-dev",
  "compatibility_date": "2026-10-06",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

O `not_found_handling: "404-page"{:jsonc}` faz a Cloudflare usar o `404.html` do Astro para endereços que não existem, com o status 404 correto. A barra no final dos endereços (`/blog` vira `/blog/`) já é o comportamento padrão, igual ao que o blog usa.

### Redirects e a armadilha da barra no final (essa parte foi chata)

Os redirects antigos do site em Next.js (como `/tags` indo para `/blog/`) estavam no `vercel.json`. Na Cloudflare eles vão num arquivo `_redirects` dentro de `public/`.

Na primeira versão, coloquei só a forma sem barra. Testando localmente, `/tags` redirecionava certinho, mas **`/tags/` devolvia 200** com uma página intermediária, que só redirecionava depois de carregar no navegador. O motivo: o Astro gera uma página de redirecionamento com `<meta refresh>` em `/tags/index.html`, e a Cloudflare servia essa página em vez de fazer o redirect de verdade. A solução foi listar as duas formas:

```txt title="public/_redirects"
/tags      /blog/   301
/tags/     /blog/   301
/notas     /blog/   301
/notas/    /blog/   301
```

### Headers de segurança e cache

O arquivo `_headers` define cabeçalhos HTTP por caminho. Aproveitei para adicionar os de segurança que estavam faltando e um cache longo para os arquivos do build, que têm um hash no nome e nunca mudam:

```txt title="public/_headers"
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Content-Security-Policy: frame-ancestors 'none'

/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```

### Versão do Node

O build da Cloudflare usa o Node 24 por padrão. O blog foi testado no 22, então fixei a versão com um arquivo `.node-version` contendo só `22`.

### Testando antes de publicar

O melhor da história: o Wrangler simula a Cloudflare localmente. Com `npx wrangler dev`, deu para testar 404, redirects e headers na minha máquina, antes de qualquer deploy. Escrevi um pequeno script com `curl` que confere 28 itens (páginas, redirects com e sem barra, 404 e headers) e rodei o mesmo script em três lugares: localmente, no endereço temporário `*.workers.dev` e no domínio final.

## Parte 3: deploy automático

Na Cloudflare, o **Workers Builds** conecta o repositório do GitHub e faz o mesmo que a Vercel fazia: a cada push na `main`, roda `npm run build` e publica com `npx wrangler deploy`. Pushes em outras branches geram uma versão de preview.

## Parte 4: a virada sem queda

Como eu disse anteriormente "A ordem importa". O domínio só saiu da Vercel depois que o site estava validado no endereço `*.workers.dev`:

1. Com o DNS já na Cloudflare, o registro principal continuou apontando para a Vercel. Ninguém percebeu a troca de nameservers.
2. Conferi que o certificado HTTPS do domínio já estava emitido na Cloudflare. Isso é importante no `.dev`, que só funciona com HTTPS.
3. Apaguei o registro que apontava para a Vercel e, logo em seguida, adicionei o `randys.dev` como domínio do Worker.
4. Em segundos o site já respondia pela Cloudflare.

:::note[o www agora funciona]
Antes, o `www.randys.dev` nem existia. Agora ele redireciona para `randys.dev` com uma regra de redirect da própria Cloudflare, mantendo o caminho e a query string. Sem nenhuma linha de código.
:::

Alguns projetos que usam subdomínios ainda continuam na Vercel por necessidades específicas, sem mudança nenhuma.

## Resultado

- O blog roda na Cloudflare, com deploy automático a cada push.
- Nenhum momento fora do ar.
- O Lighthouse ficou praticamente igual: 98 de performance e 100 em acessibilidade, boas práticas e SEO.
- Ganhei headers de segurança, cache longo nos arquivos do build e o `www` funcionando.

## O que falta

- Religar o **DNSSEC**, agora pela Cloudflare, quando os caches antigos expirarem.
- Remover o domínio do projeto antigo na Vercel.
- E, com a casa nova arrumada, começar as funcionalidades interativas. O botão de curtir é o primeiro da fila.

Valeu por ler até aqui. Forte abraço! 🤘

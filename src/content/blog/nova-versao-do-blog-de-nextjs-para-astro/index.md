---
title: "Nova versão do blog: saí do Next.js e fui para o Astro"
description: "Por que reescrevi o blog do zero trocando Next.js, Tailwind e MDX por Astro e CSS nativo, e o que mudou em velocidade, código e visual, com números medidos antes e depois."
summary: "Reescrevi o blog em Astro e CSS nativo. O que mudou e os números de antes e depois."
publishDate: 2026-09-30
image: './cover.png'
categories: ["dev"]
tags: ["astro", "nextjs", "css", "migracao"]
---

O blog está de cara nova e, dessa vez, não foi só o visual. Reescrevi tudo do zero: saí do Next.js com Tailwind e MDX e fui para o [Astro](https://astro.build/) com CSS puro. Neste post eu conto o porquê, o que mudou por baixo e por fora, e mostro os números de antes e depois (medidos, não chutados).

## Por que mudar

A [versão 2.0](/blog/bem-vindos-a-versao-20-do-blog/) nasceu em 2024 com Next.js 14, Tailwind CSS, shadcn/ui, TypeScript, Velite e MDX. Funcionava bem, mas com o tempo ficou claro que era ferramenta demais para o que um blog faz: mostrar texto.

Cada página carregava **102 kB de JavaScript** só para exibir um post estático. O projeto tinha **33 dependências diretas** e instalava **685 pacotes**. E o empurrão final veio de onde eu menos esperava: duas atualizações automáticas do Dependabot levaram o projeto para o Next.js 16, e o build simplesmente parou de funcionar. O Turbopack, agora padrão, recusa a configuração de webpack que o Velite injeta, e a API de `params` das páginas mudou.

:::note[o site não chegou a cair]
Quando um build falha, a Vercel mantém o último deploy que funcionou. Então o site continuou no ar, só que preso numa versão que eu não conseguia mais atualizar sem mexer em código que nada tinha a ver com escrever posts.
:::

Manter um blog pessoal não deveria exigir isso. Queria algo mais simples, mais leve e que durasse.

## Por que Astro

O Astro gera HTML estático e **não manda JavaScript para o navegador por padrão**: você só adiciona script onde realmente precisa. Para um blog, é exatamente o que faz sentido. Ele também trata Markdown e coleções de conteúdo de forma nativa, com validação dos campos do frontmatter, então o Velite deixou de ser necessário.

Duas referências me ajudaram muito no caminho: o [astro-erudite](https://github.com/jktrn/astro-erudite), de onde vieram a ideia de CSS nativo, os callouts e os blocos de código, e o blog do [Emile](https://emile.sh), de onde vieram o header de vidro, a paleta de cores e a organização da home.

## O que mudou por baixo

| | Versão 2.0 | Versão 3.0 |
| --- | --- | --- |
| Framework | Next.js 14 (React) | Astro 7 |
| Estilos | Tailwind CSS + shadcn/ui | CSS nativo |
| Conteúdo | MDX + Velite | Markdown (Sätteri) + content collections |
| Código nos posts | rehype-pretty-code | Expressive Code |
| Dependências diretas | 33 | 14 |
| Pacotes instalados | 685 | 436 |

### CSS nativo no lugar do Tailwind

Sair do Tailwind foi a parte que mais me divertiu. O CSS moderno resolve sozinho coisas que antes precisavam de biblioteca. O tema claro e escuro, por exemplo, virou uma linha por cor com a função `light-dark(){:css}`:

```css title="src/styles/colors.css"
:root {
  --text-main: light-dark(oklch(16.96% 0.002 17.32), oklch(84.63% 0.014 102.05));
  --bg-main: light-dark(oklch(99.01% 0.016 95.22), oklch(16.96% 0.002 17.32));
}
```

Escrevi sobre essa função [num post anterior](/blog/nova-funcao-light-dark-do-css-adaptando-tema-claro-e-escuro-automaticamente/) e agora ela está em produção aqui. Outros recursos que entraram:

- **`color-mix()`** para os tons esmaecidos e as cores das categorias.
- **Container queries** no nome gigante do rodapé: ele ocupa sempre a largura toda, em qualquer tela.
- **Popover API** + **`@starting-style`** no menu do celular: abre, fecha com <kbd>Esc</kbd> e com clique fora, com animação, e sem nenhum JavaScript de framework.
- **`backdrop-filter`** no efeito de vidro do header.

### Markdown sem MDX

Os posts agora são Markdown puro, processados pelo Sätteri (o processador nativo do Astro). Os recursos extras vêm de plugins pequenos, sem precisar de componentes dentro do texto:

- links de âncora em todos os títulos (passe o mouse sobre qualquer título deste post);
- links externos abrindo em nova aba, com os atributos certos;
- callouts como o que apareceu lá em cima;
- blocos de código com título, botão de copiar e destaque de linhas, e até código colorido no meio do texto, como `const blog = "Astro"{:ts}`.

Escrever um callout, por exemplo, é só isto no Markdown:

```md title="post.md"
:::note[título opcional]
Texto do aviso.
:::
```

## O que mudou por fora

- **Visual novo**: paleta [Flexoki](https://stephango.com/flexoki) (tons quentes, com uma textura sutil de papel no fundo), fonte Figtree e JetBrains Mono no código, e um header flutuante com efeito de vidro (Liquid Glass).
- **Imagens nos posts**: a versão antiga não tinha capas. Usei I.A. para gerar imagens para os posts antigos, e os posts novos também terão imagens, que podem ou não ter a ver com o texto.
- **Categorias**: eu quero escrever sobre vários assuntos e não só sobre desenvolvimento e tecnologia, então os posts agora se dividem em **Dev** e **Miscelânea**, cada uma com a própria página e filtro no blog. As tags também ganharam páginas.
- **Projetos**: uma página nova mostrando o que eu construo e mantenho, como o [Busca CEP](/projetos/buscacep/) e o [Por Onde Andei](/projetos/por-onde-andei/).
- **RSS completo** em [/rss.xml](/rss.xml), com o texto inteiro dos posts para quem usa leitor de RSS.
- **Acessibilidade** revisada: navegação por teclado, contraste das cores e hierarquia de títulos.

## Os números

Medi as duas versões no mesmo computador, com o build de produção e o Lighthouse, sem o Google Analytics nas duas (para não entrar script de terceiros na conta):

| | Versão 2.0 | Versão 3.0 |
| --- | --- | --- |
| JavaScript no primeiro carregamento (post) | 102 kB | 2,4 kB |
| Peso total da home | 336 KiB | 106 KiB |
| Peso total de um post | 342 KiB | 171 KiB |
| LCP da home | 2,4 s | 1,4 s |
| Tempo bloqueando a página (TBT) | 40 ms | 0 ms |
| Lighthouse: performance (home / post) | 98 / 97 | 100 / 99 |
| Lighthouse: acessibilidade (post) | 96 | 100 |
| Tempo de build | 32 s | 3 s |

A versão antiga já era rápida. A diferença está em não carregar o que não é usado. O pouco de JavaScript que sobrou serve para o botão de tema, o menu do celular, o índice lateral dos posts e o botão de copiar código.

## O que ficou de fora (por enquanto)

- **Comentários**: a versão antiga tinha comentários pelo Giscus. Ainda não trouxe para cá. Estou pensando se implemento ou não nesta nova versão.
- **Notas**: a antiga seção de notas curtas não foi migrada; os posts dela ficaram na versão 2.0. 

Nada disso se perdeu: a versão 2.0 continua guardada no repositório, na tag `v2.0`.

## Uso da Inteligência Artificial 
Utilizo este blog para colocar em prática o que aprendo, tanto que ele tem várias versões, vários commits malucos, branches e tudo que se pode imaginar. E como todo desenvolvedor que se preze, gosto de experimentar novas tecnologias e a inteligência artificial é o hype da vez.   
Então resolvi utilizar a I.A na migração do blog e na realização de várias tarefas e testes. Vou explicar tudo em um novo post, aguardem.

## O que vem por aí

Agora que a base está pronta, quero usar o blog para mais do que posts. A próxima ideia é uma área mostrando o que estou lendo, assistindo e ouvindo. Se quiser acompanhar, o [RSS](/rss.xml) está aí.

Valeu por ler até aqui! 🤘

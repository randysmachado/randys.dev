---
title: Galeria de imagens responsivas com CSS Grid
description: Como criar uma galeria de imagens totalmente responsiva com poucas
  linhas de CSS
date: 2022-01-20 11:00:43
category: CSS
thumbnail: '/images/uploads/pexels-antonio-batinić-4164418.jpg'
---
Quem nunca teve dor de cabeça na hora de fazer uma galeria de imagens/fotos que fosse totalmente responsiva?

Se você é uma dessas pessoas vem comigo que neste artigo vou te apresentar uma dica que vai permitir que você  crie uma galeria de imagens/fotos e outros tipo de layout com a mesma técnica.

Vamos utilizar a propriedade`grid`do **CSS** que oferece um sistema de layout baseado em grid, com linhas e colunas.

## CSS Grid

> CSS Grid layout é uma especificação do W3C projetada para proporcionar um método bi-dimensional para criação de layout CSS que oferece a possibilidade de "layoutar" itens da página com uso de linhas e colunas.

Referência: [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout)



## Layout

Para nosso layout eu criei um arquivo HTML simples com imagens geradas randomicamente.

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Responsive Image Gallery with CSS Grid</title>
  </head>
  <body>
    <main class="main">
      <h1 class="title">Responsive Image Gallery with CSS Grid</h1>

      <div class="grid">
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
    </main>
  </body>
</html>

```

> Para gerar as imagens de forma randômicas utilizei este link do unsplah `https://source.unsplash.com/random`

Perceba que é um arquivo HTML simples que chama um arquivo de estilo e contém algumas imagens.



## CSS

Vamos ao nosso arquivo CSS par dar um pouco de estilo ao nosso layout.

```css
/* style.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: rgb(63, 94, 251);
  background: linear-gradient(
    0deg,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

.main {
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;
}

.title {
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
}

```

No arquivo estilo eu simplesmente fiz um reset básico e defini alguns estilos para nossas imagens, título e o tamanho do nosso container.



## O Poder o CSS Grid

No arquivo de HTML englobamos todas as imagens em uma classe chamada `grid`, será nessa classe que vamos trabalhar. Primeiramente vamos definir nossa classe para se comportar com um grid.

```css
.grid {
  display: grid;
}
```

No momento você vai perceber que não aconteceu nada. Mas vamos dizer que queremos que nossa galeria tenha  quatro colunas de 200px cada, para isso utilizaremos a propriedade `grid-template-columns`, e vamos aproveitar para deixar um espaço entre as imagens de 20px, com a propriedade `gap`.



```css
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  gap: 20px;
}
```

Teremos algo mais ou menos assim:

![Galeria de imagens com 4 colunas](images/image1.jpg "Galeria de imagens com 4 colunas")

Veja que escrevemos quatro vezes 200px na propriedade `grid-template-columns`, porém há uma forma melhor de escrever utilizando o `repeat()`, que recebe dois valores, a quantidade que será repetida e o tamanho.

```css
.grid {
  grid-template-columns: repeat(4, 200px);
}
```

Bom, se neste momento se você diminuir o tamanho da dela perceberá que nossas imagens não estão responsivas, agora vamos utilizar mais duas propriedades que vai deixar tudo lindo.

Dentro do `repeat()`, utilizaremos a propriedade `auto-fill`, que traduzindo a grosso modo significa **preencher automaticamente**. Depois utilizaremos a propriedade `minmax()`, que é bem simples, aqui iremos definir o valor mínimo e máximo de tamanho, utilizaremos os 200px e **1fr**. Essa unidade **fr** (fração) é uma unidade flexível e fracionária, ou seja, 1 parte do espaço disponível.

O código ficará da seguinte forma:

```css
.grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Ao olhar o layout você não perceberá muita diferença, mas quando diminuir o tamanho da tela...



<!--StartFragment-->

![](https://i.giphy.com/media/aaxc7FnVbZDJ653ch9/giphy-downsized-large.gif)

<!--EndFragment-->

Agora temos uma galeria totalmente responsiva.



## Conclusão

Como foi mostrado neste artigo, com apenas 3 linhas de código criamos um layout totalmente responsivo. E esta é somente uma das coisas que podemos criar um o CSS Grid. Abaixo deixarei uns links de referência caso tenha interesse de estudar mais sobre o assuntos.

**Referências e guias:**

[CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

[MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/grid)



Espero que tenha gostado.

Grande abraço e até a próxima. 🤘

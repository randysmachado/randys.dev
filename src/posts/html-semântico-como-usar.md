---
title: "HTML semântico: Como usar?"
description: Você utiliza as tags HTML corretamente?
date: 2021-09-16 10:19:30
category: HTML
color: "#14A0DC"
---
Neste primeiro post tenho a intenção de começar uma série de posts onde quero falar sobre HTML semântico um assunto bem bacana e que gera um pouco de confusão para quem esta começando a codar. Quero abordar o uso de tags como: `<header>`, `<article>`, `<section>`, `<aside>` e muitas outras, então cola aqui que vai ser massa 🚀.

HTML

HTML significa HyperText Markup Language ou seja, Linguagem de Marcação de HiperTexto, que foi criada para estruturar o conteúdo da web, não vou entrar muita história do HTML pois já presumo que você já sabe alguma coisa sobre o assunto, mas vale lembrar que até o HTML4 toda a marcação dos bloco era escrita de forma pura, ou seja, com `<div>`, mas com a chegada do HTML5 tudo mudou dando lugar a semântica.

O que significa semântica?

> Semântica é um ramo da linguística que estuda o significado da palavras.

Mas a final de contas o que tem haver semântica um termo da linguística com HTML?

Com o uso da semântica aplicada ao HTML tornou mais claro toda a estrutura do código, dividindo e nomeando cada pedaço, facilitando a identificação de cada bloco. 

Ainda ficou confuso? Não tem problemas, vou explicar com mais detalhes.

HTML puro

Nos primórdios o HTML era escrito com a marcação de tags juntamente com a estilização da página, era algo mais ou menos assim:

```html
<html>
  <head>
    <title>HTML Puro</title>
  </head>
  <body>
    <table width="500" border="0" cellpadding="0" cellspacing="0">
      <tr valign="middle" bgColor="#cc3333">
        <td height="56" colspan="3">
          <h1 align="center" color="#ffffff">
            Como era trabalhoso e feio escrever assim!
          </h1>
        </td>
      </tr>
    </table>
  </body>
</html
```

Uma loucura não é mesmo? Tudo que hoje escrevemos com o CSS era escrito dentro da tag, agora imagina escrever um código assim de uma página grande como o site do G1, por exemplo 😮.

Com o chegada do CSS, as coisas melhoram um pouco pois foi possível tirar toda a estilização de dentro das tags e adicionar em um local separado e utilizar `class` e `id` para referenciar os estilos.
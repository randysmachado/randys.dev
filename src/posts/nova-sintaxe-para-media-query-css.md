---
title: Nova sintaxe para media query CSS
description: Aprenda em primeira mão como utilizar a nova sintaxe.
category: CSS
tags:
  - web
  - css
thumbnail: /images/uploads/media-query.png
date: 2023-04-12 04:52:21
---
## Introdução



A media query atualmente recebeu uma pequena atualização simplificando a escrita e ajudando na compreensão.

Quem nunca ficou confuso na hora de escrever um media query e determinar se a propriedade seria `min-width` ou `max-width`?

Eventualmente a media query é mais utilizada para definir regra de acordo com o tamanho da tela, ou seja, a viewport e com a nova sintaxe a escrita ficará mais simples. Vejamos como funciona.

## Como funcionará?

```css
@media (min-width: 600px) {
  // code
}
```

Aqui temos um código de implementação de uma media query, é neste momento que fica um pouco confuso, porque escrevemos `min-width` para viewport maior ou igual à 600px. 

Mas com a nova sintaxe o código ficará assim:

```css
@media (width >= 600px) {
  // code
}
```

No código acima é utilizado uma regra matemática para definir o tamanho do width deixando o código mais simples, ao passo que utilizamos essas regras matemáticas o tempo todo.

## Outros exemplos



Para utilizar duas ou mais definições de media query utilizamos:

```css
@media (min-width: 600px) and (max-width: 800px) {
  // code
}
```

Com a nova sintaxe o código fica:

```css
@media (600px <= width >= 800px) {
  // code
}
```

## Suporte



Atualmente o suporte a nova sintaxe de media query está nos seguintes navegadores:

* Chrome 104
* Edge 104
* Firefox 63
* Safari 16.4

## C﻿onclusão



Eu gostei bastante, acho que simplifica um pouco a leitura e a escrita.

E você o que achou dessa nova sintaxe do media query?



G﻿rande Abraço!
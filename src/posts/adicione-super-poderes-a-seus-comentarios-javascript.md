---
title: Adicione super poderes a seus comentários JavaScript
description: Saiba como fazer comentários úteis e inteligentes no seu código JavaScript.
category: JavaScript
tags:
  - web
  - javascript
  - comentários
thumbnail: /images/uploads/super-poderes.png
date: 2023-02-25 12:45:35
---
## Introdução

Comentários é uma maneira muito eficaz de explicar o que o código faz e como ele funciona. Adicionando comentários úteis ao seu código você pode torná-lo fácil de entender, dar manutenções e manter. Além disso, comentários podem te ajudar a se lembrar do que você fez naquela sexta-feira às 17h50 e que depois é preciso refatorar (entendedores entenderão). 

É importante lembrar que comentários também podem ser utilizados para documentar um código explicando o motivo de porque certas decisões foram tomadas e fornecer informações a outros devs que trabalham ou irão trabalhar no código.

## Situação

Vejamos a seguinte situação:

Você criou uma função que vai retornar o nome completo do usuário, essa função vai receber dois parâmetros, `name` e `lastName`.

```javascript
function fullName(name, lastName) {
  return `${name} ${lastName}`;
}

console.log(fullName("Maria", "Sebastiana")); // Maria Sebastiana
```

Esse é um código muito simples é só você bater o olho que consegue entender e se você estiver utilizando o VS Code ele é inteligente o suficiente para te falar que a função recebe dois parâmetros.

![Código JavaScript de uma função que retorna o nome completo de um usuário](/images/uploads/code-1.png "Código JavaScript de uma função que retorna o nome completo de um usuário")

Mas perceba que o `name` e `lastName` são do tipo `any`, ou seja, podem ser qualquer valor, mas por algum motivo você quer ser explícito com os argumentos que deseja receber na sua função, como por exemplo falar que o `name` e `lastName` sejam do tipo `string` e quando for utilizar a função o editor já consiga avisar quais tipos de parâmetros deve passar.

Talvez adicionar algo assim:

```javascript
// name e lastName são strings
function fullName(name, lastName) {
  return `${name} ${lastName}`;
}

console.log(fullName("Maria", "Sebastiana")); // Maria Sebastiana
```

Isso seria informativo, mas e se a função estiver sendo utilizada em outro arquivo?
Além do mais o VS Code continuaria informando que os valores são do tipo `any`.

## Como resolver?

É neste momento que você vai dar super poder a seus comentários utilizando a API de documentação do JavaScript o [JSDoc](https://jsdoc.app/).
Na nossa função podemos adicionar a tag `@param` no comentário, informando o tipo de parâmetro que será recebido na função.

> Agora os comentários devem ser adicionados antes do código documentado e começar com a seguinte sequência /\*\***.** Comentáro começando com /\* \*, /\*\** serão ignorados.

```javascript
/**
 * 
 * @param {string} name  
 */
export function fullName(name, lastName) {
  return `${name} ${lastName}`;
}

console.log(fullName());
```

A sintaxe é simples, você utiliza o `@param { type }` onde o `type` é o tipo de dado disponível em JavaScript como: `string`, `number`, `boolean`, `Object` etc.
Ao colocar o mouse sobre a função `fullName()`, você verá que o `name` está assinalado como `string`.

![Código JavaScript de uma função que retorna o nome completo de um usuário](/images/uploads/code-2.png "Código JavaScript de uma função que retorna o nome completo de um usuário")

Vamos fazer a mesma coisa para o parâmetro `lastName`.

```javascript
/**
 *
 * @param {string} name - Chico
 * @param {string} lastName - Bastião
 * @returns {string}
 */
export function fullName(name, lastName) {
  return `${name} ${lastName}`;
}
```

Perceba que adicionei outra tag `@param` para o `lastName` e na frente adicionei uma descrição, isso é bem útil porque você pode adicionar uma descrição detalhada sobre o parâmetro. Outra tag que foi adicionada foi o `@returns` nela você pode discriminar que tipo de retorno terá a função.

![Código JavaScript de uma função que retorna o nome completo de um usuário](/images/uploads/code-3.png "Código JavaScript de uma função que retorna o nome completo de um usuário")

Show, não é?

## Conclusão

Viram como é simples e interessante adicionar comentários inteligentes no seu código JavaScript? E você não precisa se limitar somente em `@param` ou `@returns` há diversas outras tags para você usar e abusar, é só olhar na documentação do [JSDoc](https://jsdoc.app/index.html#block-tags).


Claro que isso não seria necessário se você estivesse utilizando TypeScript. Mas às vezes você ainda não sabe TypeScript ou o projeto seja em JavaScript.

Espero que tenham gostado dessa dica.
Grande abraço.
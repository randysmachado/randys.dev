---
title: "Como utilizar o Browsersync no WordPress"
description: "Use o Browsersync pra sincronizar as mudanças no código com o navegador e pare de dar reload na página manualmente."
publishDate: 2024-08-19
image: './cover.png'
categories: ["dev"]
tags: ["wordpress"]
---
No post anterior eu falei sobre as funcionalidades e benefícios de utilizar o `wordpress/scripts` em seu projeto. Caso tenha perdido [clique aqui](/blog/o-que-e-o-wordpress-scripts-como-usa-lo-e-por-que-ele-e-essencial-para-seu-desenvolvimento-no-wordpress/).  

Agora quero continuar o post anterior adicionando um pouco mais de poder ao `wordpress/scripts` utilizando o Browsersync para sincronizar o código que você está escrevendo e atualizando automaticamente a página sem precisar fazer o reload manualmente.

## O que é o Browsersync?
O BrowserSync é uma ferramenta que facilita o desenvolvimento web sincronizando automaticamente alterações do código com o navegador. Ele permite que você veja as mudanças do seu código em tempo real, sem precisar atualizar a página manualmente. Há outras funcionalidades que você pode explorar consultando a documentação.

## Como instalar?
Para instalar é simples, somente executar o comando abaixo:
```bash
npm install browser-sync --save-dev
```
Partirei do princípio que você é uma pessoa esperta e leu o post anterior e já tem a estrutura inicial no seu projeto 😉.   
Agora precisamos alterar o arquivo `package.json` adicionando na parte de `scripts` a seguinte linha de código:

```json
{
   "scripts": {
      "sync": "browser-sync start -p \"URL_DO_SEU_SITE\" --files \"**/*.php\"",
   }
}
```
É necessário substituir a palavra `URL_DO_SEU_SITE` pela URL do servidor que está rodando a aplicação. Importante que não utilize as iniciais `http://` ou `https://` . Dependendo do servidor a URL pode ser algo como: `meu-site.local`,   `meu-site.test`, `localhost`.  

Explicando o código acima em poucas palavras, podemos dizer que ele está chamando o browsersync para iniciar o nosso site na URL indicada e ficar olhando os arquivos `.php` que foram alterados e atualizar o site automaticamente.

## Juntando tudo
Para que tudo funcione lindamente, precisamos juntar os scripts do `wordpress/scripts` com o script do browsersync que acabamos de configurar. Para isso precisamos instalar um novo pacote que nos ajudar a executar tudo de uma vez.
```bash
npm i npm-run-all
```
Agora vem a cereja do bolo, vamos criar um novo script chamado `dev` que vai pegar nossos outros scripts e rodar todos juntos e em paralelo. No final nosso arquivo `package.json` ficará assim:

```json
{
   "scripts": {
      "dev": "npm-run-all --parallel sync start",
      "sync": "browser-sync start -p \"URL_DO_SEU_SITE\" --files \"**/*.php\"",
      "build": "wp-scripts build",
      "start": "wp-scripts start",
      "lint:js": "wp-scripts lint-js",
      "format": "wp-scripts format"
   }
}
```
O script `dev` está utilizando no pacote `npm-run-all` que rodar vários scripts de uma só vez, neste caso nossos scripts `sync` e `start` em paralelo.

## Conclusão
Agora temos um script que fica de olho nos nossos arquivos `.php` e atualiza a página automaticamente sempre que algo muda, graças ao BrowserSync. Legal, né?  

Espero que vocês tenham gostado e fique de olho pois vamos deixar esse script mais poderoso futuramente.

Saudações,  
Grande Abraço!

{/* ## O que é o `@wordpress/scripts`?
O `@wordpress/scripts` é um pacote NPM desenvolvido pela equipe do WordPress que facilita a configuração e a automação de tarefas comuns no desenvolvimento de temas e plugins. Ele foi criado para simplificar o processo de desenvolvimento, oferecendo uma série de scripts pré-configurados que lidam com tarefas como compilação, empacotamento e minificação de arquivos JavaScript e CSS.

## Principais Funcionalidades do `@wordpress/scripts`:

1. **Compilação com Babel:**
   - O `@wordpress/scripts` utiliza Babel para transpilar o código ES6+ para uma versão compatível com navegadores mais antigos. Isso permite que você escreva código moderno sem se preocupar com a compatibilidade.

2. **Empacotamento com Webpack:**
   - Webpack é utilizado para empacotar todos os seus módulos JavaScript em um único arquivo. Ele também lida com importações de CSS e outras dependências, otimizando o carregamento de recursos no seu site.

3. **Minificação de Arquivos:**
   - O pacote inclui scripts para minificar tanto os arquivos JavaScript quanto CSS, o que reduz o tamanho dos arquivos e melhora o desempenho do site.

4. **Linting e Formatação de Código:**
   - O `@wordpress/scripts` vem configurado com ESLint e Prettier, ferramentas que ajudam a manter a consistência e a qualidade do código, verificando erros e aplicando regras de estilo.

5. **Watch Mode:**
   - Ele oferece um modo "watch" que recompila automaticamente os arquivos sempre que há uma mudança, agilizando o processo de desenvolvimento.

## Por que utilizar o `@wordpress/scripts`?

- **Configuração Simples:** Ele elimina a necessidade de configurar ferramentas complexas individualmente, permitindo que você comece a desenvolver rapidamente.
- **Padrões do WordPress:** O pacote já vem configurado com as melhores práticas e padrões do WordPress, garantindo que seu código esteja alinhado com o ecossistema da plataforma.
- **Integração Facilmente Expandível:** Embora ofereça uma configuração pronta para uso, você pode customizá-lo conforme necessário, adicionando suas próprias ferramentas e ajustes.

## Como instalar e usar o `@wordpress/scripts`?

Para começar a usar o `@wordpress/scripts`, você precisa tê-lo instalado em seu projeto. Vale lembrar que é preciso ter o **NodeJS** instado no teu computador, para funcionar.  

Aqui está um exemplo básico de como configurá-lo:

1. **Instalação:**
```bash
npm init -y
```
em seguida,

```bash
npm install @wordpress/scripts --save-dev
```

2. **Configuração do `package.json`:**  
    - Adicione os seguintes scripts ao seu `package.json`:
```json
{
    "scripts": {
        "build": "wp-scripts build",
        "start": "wp-scripts start",
        "lint:js": "wp-scripts lint-js",
        "format": "wp-scripts format"
    }
}
```
3. **Execução:**
   - Para compilar o código em modo de produção: `npm run build`
   - Para iniciar o modo de desenvolvimento: `npm run start`

Com essas configurações, o `@wordpress/scripts` cuidará da maioria das tarefas de desenvolvimento, permitindo que você foque no que realmente importa: criar um site incrível.


## Conclusão
O `@wordpress/scripts` é uma ferramenta poderosa que simplifica o desenvolvimento no WordPress, tornando o processo mais rápido e eficiente. Ao utilizá-lo, você adere às melhores práticas do WordPress, garantindo que seu projeto esteja bem estruturado e otimizado.

Nos próximos posts quero mostrar como utilizar o `@wordpress/scripts` juntamente com o Browser Sync e TailwindCSS de forma simples é pratica. Fique ligado! 😉

Saudações,  
Grande Abraço! */}
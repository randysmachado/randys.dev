import { defineMdastPlugin } from "satteri";

/**
 * Blocos de página em Markdown: `:::formacao` e `:::tecnologias` (página
 * Sobre). O conteúdo continua sendo lista comum; o bloco só vira um
 * `<div data-block="…">` e o visual vem de src/styles/page-blocks.css.
 * Fora do blog, o Markdown aparece como lista normal.
 *
 *   :::formacao                 :::tecnologias
 *   - Graduação                 - Grupo
 *     - **Curso** Grau · Local    - Tecnologia
 *   :::                         :::
 */
const BLOCKS = new Set(["formacao", "tecnologias"]);

export const pageBlocks = defineMdastPlugin({
  name: "page-blocks",
  containerDirective(node, ctx) {
    if (!BLOCKS.has(node.name)) return;
    ctx.setProperty(node, "data", {
      hName: "div",
      hProperties: { dataBlock: node.name },
    });
  },
});

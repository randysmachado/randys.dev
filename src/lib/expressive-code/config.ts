import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import {
  createRenderer,
  type SatteriExpressiveCodeOptions,
} from "satteri-expressive-code";

/**
 * Expressive Code (blocos de código dos posts), no molde do astro-erudite
 * (src/lib/expressive-code/config.ts), com os tokens deste blog.
 * Tema escuro segue o toggle do site (`html.dark`), não só o sistema.
 */
export const ecOptions: SatteriExpressiveCodeOptions = {
  themes: ["github-light", "github-dark"],
  useDarkModeMediaQuery: false,
  // O Expressive Code prefixa `:root` no seletor: `.dark` → `:root.dark`.
  // (Um seletor de tipo como `html.dark` viraria `:roothtml.dark`, inválido.)
  // O tema claro é o padrão (1º da lista) e não precisa de seletor; se tiver,
  // ele entra num `:not()` aplicado ao próprio bloco e quebra o escuro.
  themeCssSelector: (theme) => (theme.type === "dark" ? ".dark" : false),
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
  defaultProps: {
    wrap: true,
    // Números de linha só quando pedidos no bloco (`showLineNumbers`).
    showLineNumbers: false,
    collapseStyle: "collapsible-auto",
  },
  styleOverrides: {
    codeFontSize: "var(--step--1)",
    codeFontFamily: "var(--font-mono)",
    codeBackground: "color-mix(in oklab, var(--bg-muted) 25%, transparent)",
    borderColor: "var(--border-main)",
    borderRadius: "0.75rem",
    uiFontFamily: "var(--font-sans)",
    lineNumbers: {
      foreground: "var(--text-muted)",
    },
    frames: {
      editorActiveTabForeground: "var(--text-muted)",
      editorActiveTabBackground: "transparent",
      editorActiveTabIndicatorBottomColor: "transparent",
      editorActiveTabIndicatorTopColor: "transparent",
      editorTabBorderRadius: "0",
      editorTabBarBackground: "transparent",
      editorTabBarBorderBottomColor: "transparent",
      frameBoxShadowCssValue: "none",
      terminalBackground:
        "color-mix(in oklab, var(--bg-muted) 25%, transparent)",
      terminalTitlebarBackground: "transparent",
      terminalTitlebarBorderBottomColor: "transparent",
      terminalTitlebarForeground: "var(--text-muted)",
    },
    textMarkers: {
      backgroundOpacity: "25%",
      borderOpacity: "25%",
      defaultChroma: "50",
      lineMarkerLabelColor: "var(--text-main)",
    },
    collapsibleSections: {
      closedFontFamily: "var(--font-sans)",
    },
  },
};

export const ecRenderer = createRenderer(ecOptions);

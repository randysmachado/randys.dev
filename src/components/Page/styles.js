import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    max-width: 96rem;
    margin: 0 auto;
    padding: calc(${theme.grid.gutter} / 2);
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    margin-top: 4rem;
    span {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.fontMono};
    }
  `}
`

export const Title = styled.h1`
  font-size: clamp(3.8rem, 7vw, 4.6rem);
  line-height: 1.4;
  margin-top: 1rem;
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: clamp(1.8rem, 3vw, 2rem);
    font-weight: ${theme.font.normal};
  `}
`

export const FeatureImage = styled.div`
  margin: 3rem 0;
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    span {
      margin-left: 1rem;
      color: ${theme.colors.secondary};
      font-family: ${theme.font.fontMono};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    h2,
    h3 {
      margin: 2rem 0;
    }

    p {
      margin-bottom: 2rem;
    }

    a {
      color: ${theme.colors.secondary};
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background-color: ${theme.colors.secondary};
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      }
      &:hover::before {
        left: 0;
        right: auto;
        width: 100%;
      }
    }

    strong {
      font-weight: ${theme.font.bold};
      color: ${theme.colors.gray100};
    }

    /* Prism Dracula theme */
    code,
    pre {
      color: #f8f8f2;
      background: #393c4d;
      text-shadow: 0 1px rgba(0, 0, 0, 0.3);
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;
      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
      font-size: 1.6rem;
      padding: 0.2em;
      margin: 0.5em 0;
      overflow: auto;
      border-radius: ${theme.border.radius};
    }
    code[class*='language-'],
    pre[class*='language-'] {
      color: #f8f8f2;
      background: none;
      text-shadow: 0 1px rgba(0, 0, 0, 0.3);
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;
      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
      font-size: 1.6rem;
    }
    /* Code blocks */
    pre[class*='language-'] {
      padding: 1em;
      margin: 0.5em 0;
      overflow: auto;
      border-radius: 0.3em;
    }
    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
      background: #282a36;
    }
    /* Inline code */
    :not(pre) > code[class*='language-'] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
    }
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #6272a4;
    }
    .token.punctuation {
      color: #f8f8f2;
    }
    .namespace {
      opacity: 0.7;
    }
    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #ff79c6;
    }
    .token.boolean,
    .token.number {
      color: #bd93f9;
    }
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #50fa7b;
    }
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
      color: #f8f8f2;
    }
    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.class-name {
      color: #f1fa8c;
    }
    .token.keyword {
      color: #8be9fd;
    }
    .token.regex,
    .token.important {
      color: #ffb86c;
    }
    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }
    .token.entity {
      cursor: help;
    }
  `}
`

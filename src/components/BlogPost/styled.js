import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  max-width: 1120px;
  padding: 0 2rem;
  margin: 4rem auto;

  ${media.lessThan('medium')`
    margin: 2rem auto;
  `}
`

export const Header = styled.header`
  margin: 6rem 0 8rem 0;

  ${media.lessThan('medium')`
    margin: 2rem 0 6rem 0;
  `}
`

export const EntryHeader = styled.div`
  font-size: 1.8rem;

  span + span {
    margin-left: 1rem;
  }

  a {
    display: block;
    max-width: 180px;
    font-size: 2rem;
    margin-bottom: 4rem;

    color: var(--highlight);
    border-bottom: 2px solid var(--highlight);
    padding: 0 0.3rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--highlight);
      color: var(--primary);
    }
  }
`

export const Title = styled.h1`
  font-size: 6rem;

  ${media.lessThan('medium')`
    font-size: 3.6rem;
  `}
`

export const Description = styled.h2`
  font-size: 2.6rem;
  font-weight: 400;

  ${media.lessThan('medium')`
    font-size: 2.2rem;
  `}
`

export const Content = styled.div`
  max-width: 850px;
  margin: 0 auto;

  a {
    color: var(--highlight);
    border-bottom: 2px solid var(--highlight);
    padding: 0 0.3rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--highlight);
      color: var(--primary);
    }
  }

  p {
    font-size: 2.2rem;
    margin-bottom: 2.4rem;
    line-height: 3.6rem;
  }

  li {
    font-size: 2.2rem;
    line-height: 4rem;
    margin-bottom: 2rem;
  }

  ul,
  ol {
    margin-left: 2.4rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: disc;
  }

  blockquote {
    border-left: 5px solid var(--highlight);
    background-color: var(--surface);
    padding: 2rem;
    margin-bottom: 2rem;

    p {
      margin: 0;
    }
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2rem;
  }

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
    font-size: 1.8rem;

    padding: 0.2em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
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
    font-size: 1.8rem;
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
`

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local(''), url('../fonts/inter-v12-latin-300.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local(''),
        url('../fonts/inter-v12-latin-regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local(''), url('../fonts/inter-v12-latin-600.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Plus Jakarta Sans';
      font-style: normal;
      font-weight: 400;
      src: local(''),
        url('../fonts/plus-jakarta-sans-v3-latin-regular.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Plus Jakarta Sans';
      font-style: normal;
      font-weight: 600;
      src: local(''),
        url('../fonts/plus-jakarta-sans-v3-latin-600.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Plus Jakarta Sans';
      font-style: normal;
      font-weight: 800;
      src: local(''),
        url('../fonts/plus-jakarta-sans-v3-latin-800.woff2') format('woff2');
    }

    @font-face {
      font-family: 'IBM Plex Mono';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local(''),
        url('../fonts/ibm-plex-mono-v12-latin-300.woff2') format('woff2');
    }
    @font-face {
      font-family: 'IBM Plex Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local(''),
        url('../fonts/ibm-plex-mono-v12-latin-regular.woff2') format('woff2');
    }
    @font-face {
      font-family: 'IBM Plex Mono';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local(''),
        url('../fonts/ibm-plex-mono-v12-latin-600.woff2') format('woff2');
    }

    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
      list-style: none;
    }

    /* To facilitate apply rem unity */
    html {
      font-size: 62.5%; // 10px
    }

    /* Set core root defaults */
    html:focus-within {
      scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
      max-width: 100%;
      display: block;
    }

    img {
      border-radius: ${theme.border.radius};
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    /* Base */
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.normal};
      background-color: ${theme.colors.primary};
      color: ${theme.colors.gray};
      overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.grayLight};
      overflow-wrap: break-word;
      font-family: ${theme.font.secondary};
    }

    a {
      cursor: pointer;
      text-decoration: none;
      color: ${theme.colors.gray};
    }

    a:hover,
    a:focus {
      color: ${theme.colors.secondary};
    }

    p {
      font-size: 2rem;
      line-height: 1.8;
      overflow-wrap: break-word;
      color: ${theme.colors.gray};
    }
  `}
`
export default GlobalStyles

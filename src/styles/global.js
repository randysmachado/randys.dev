import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #f7f7f7;

    --profile-bg: #f1f1f1;
    --profile-border: #e8e9ed;

    --text: #838A97;

    --highlight: #3B82F6;

    --white: #111827;
  }

  [data-theme='dark'] {
    --primary: #111827;

    --profile-bg: #1A2130;
    --profile-border: #212536;

    --white: #f7f7f7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--primary);
    color: var(--white);
    font-family: 'Jost', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  p {
    font-size: 1.8rem;
  }
`
export default GlobalStyles

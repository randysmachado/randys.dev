import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #1E2235;
    --surface: #23263A;

    --highlight: #E9424F;

    --white: #fff;
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

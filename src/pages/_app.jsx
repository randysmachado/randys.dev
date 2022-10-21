import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A192F" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress color="#2dd4bf" />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

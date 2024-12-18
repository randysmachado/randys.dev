import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'
import { Footer } from '@/components/footer'

import './globals.css'
import { GoogleAnalytics } from '@/components/analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  alternates: {
    canonical: siteConfig.url
  },
  applicationName: 'Randys Machado Blog',
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  description: siteConfig.description,
  creator: siteConfig.author,
  publisher: siteConfig.author,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  other: {
    'google-adsense-account': 'ca-pub-2668671765911701'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

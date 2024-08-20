'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Icons } from './icons'

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className="mr-6 flex items-center space-x-2"
        aria-label={siteConfig.name}
      >
        <Icons.logo className="h-8 w-8" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        aria-label="url da página blog"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        /blog
      </Link>
      <Link
        href="/sobre"
        aria-label="url da página sobre"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/sobre' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        /sobre
      </Link>
      <Link
        href="/notas"
        aria-label="url da página notas"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/notas' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        /notas
      </Link>
    </nav>
  )
}

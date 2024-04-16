import { siteConfig } from '@/config/site'
import { Mail } from 'lucide-react'
import { Icons } from './icons'
import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            aria-label="Envie um e-mail"
            href="mailto:randys.machado@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">e-mail</span>
            <Mail className="h-6 w-6" />
          </a>

          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Siga me no github"
          >
            <span className="sr-only">github</span>
            <Icons.gitHub className="h-6 w-6" />
          </Link>

          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Siga me no twitter"
          >
            <span className="sr-only">twitter</span>
            <Icons.twitter className="h-6 w-6" />
          </Link>

          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Siga me no instagram"
          >
            <span className="sr-only">instagram</span>
            <Icons.instagram className="h-6 w-6" />
          </Link>
        </div>

        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a href={siteConfig.links.personalSite}>{siteConfig.author}</a>
        </div>
      </div>
    </footer>
  )
}

import { slug } from 'github-slugger'
import Link from 'next/link'
import { badgeVariants } from '@/components/ui/badge'
import slugify from 'slugify'

interface TagProps {
  tag: string
  current?: boolean
  count?: number
}

export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? 'default' : 'secondary',
        className: 'no-underline'
      })}
      href={`/tags/${slugify(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  )
}

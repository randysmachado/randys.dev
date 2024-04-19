import Link from 'next/link'

export function CustomLink(props: any) {
  const href = props.href
  const isInternalLink = (href && href.startsWith('/')) || href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href}>{props.children}</Link>
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      aria-label={`Link para ${props.href}`}
      {...props}
    />
  )
}

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col mt-10 items-center h-dvh">
      <h1 className="text-9xl bold">404</h1>
      <p className="text-3xl mt-4">Oops! Esta página não existe 👀</p>
      <p className="text-muted-foreground">
        Se você esperava ver algo aqui, me avise (randys.machado@gmail.com).
      </p>
      <Link
        className={cn(
          buttonVariants({ variant: 'link' }),
          'text-lg text-blue-500 mt-4'
        )}
        href="/"
        aria-label="Voltar para página inicial"
      >
        Voltar para página inicial 🏠
      </Link>
    </div>
  )
}

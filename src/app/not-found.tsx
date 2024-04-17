import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container flex flex-col mt-10 items-center h-dvh">
      <h1 className="text-center text-9xl bold">404</h1>
      <p className="text-center text-3xl my-4 text-balance">
        Oops! Esta página não existe. 👀
      </p>
      <p className="text-center text-muted-foreground text-balance">
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

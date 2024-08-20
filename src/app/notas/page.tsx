import { notes } from '#site/content'
import { MDXContent } from '@/components/mdx-components'
import { QueryPagination } from '@/components/query-pagination'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { siteConfig } from '@/config/site'
import { formatDate, sortNotes } from '@/lib/utils'
import { Calendar } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minhas Notas',
  description: siteConfig.description
}

const NOTES_PER_PAGE = 5

interface NotePageProps {
  searchParams: {
    page?: string
  }
}

export default async function NotePage({ searchParams }: NotePageProps) {
  const notePublished = sortNotes(notes.filter((note) => note.published))

  const currentPage = Number(searchParams?.page) || 1
  const totalPages = Math.ceil(notePublished.length / NOTES_PER_PAGE)

  const displayNotes = notePublished.slice(
    NOTES_PER_PAGE * (currentPage - 1),
    NOTES_PER_PAGE * currentPage
  )

  return (
    <section className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Notas
          </h1>
          <p className="text-lg text-muted-foreground">
            As notas são postagens mais curtas, um local para descarregar a
            minha mente. Aqui compartilho de tudo, pensamentos, ideias,
            reclamações e tudo que vier a cabeça. Então desde já fique sabendo
            que poderá ler qualquer coisa.
          </p>
        </div>
      </div>

      <div className="gap-3 mt-8">
        <hr />
        <div className="max-w-2xl mx-auto">
          {displayNotes?.length > 0 ? (
            <ul className="mt-8">
              {displayNotes.map((note) => {
                const { body, date, slug } = note

                return (
                  <li
                    className="mb-8 prose prose-p:text-lg dark:prose-invert"
                    key={slug}
                  >
                    <div className="bg-muted rounded-lg border p-6 shadow-sm">
                      <Badge className="w-max flex gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={date}>{formatDate(date)}</time>
                      </Badge>

                      <MDXContent code={body} />
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="py-4">Nada para ver aqui</p>
          )}

          <QueryPagination totalPages={totalPages} className="mt-4" />
        </div>
      </div>
    </section>
  )
}

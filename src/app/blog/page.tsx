import { Metadata } from 'next'

import { PostItem } from '@/components/post-item'
import { QueryPagination } from '@/components/query-pagination'

import { posts } from '#site/content'

import { siteConfig } from '@/config/site'
import { getAllTags, sortPost, sortTagsByCount } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tag } from '@/components/tags'

export const metadata: Metadata = {
  title: 'Meu blog',
  description: siteConfig.description,
  alternates: {
    canonical: '/blog'
  }
}

const POSTS_PER_PAGE = 5

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  /**
   * verificar se o post esta publicado para depois
   * realizar a ordenação.
   */
  const postPublished = sortPost(posts.filter((post) => post.published))

  const currentPage = Number(searchParams?.page) || 1
  const totalPages = Math.ceil(postPublished.length / POSTS_PER_PAGE)

  const displayPosts = postPublished.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  )

  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)

  return (
    <section className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Compartilhando experiências e reflexões do desenvolvimento web.
          </p>
        </div>
      </div>

      <div className="grid grid-cold-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />

          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { slug, title, date, description, tags } = post
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      title={title}
                      date={date}
                      description={description}
                      tags={tags}
                    />
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="py-4">Nada para ver aqui</p>
          )}

          <QueryPagination totalPages={totalPages} className="mt-4" />
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag key={tag} tag={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

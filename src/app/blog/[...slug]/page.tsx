import { notFound } from 'next/navigation'
import { Metadata } from 'next'

import { posts } from '#site/content'
import { MDXContent } from '@/components/mdx-components'

import { siteConfig } from '@/config/site'
import { Tag } from '@/components/tags'
import { Comments } from '@/components/comments'

import '@/styles/mdx.css'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }))
}

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) return {}

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', post.title)

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`]
    }
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  const user = process.env.NEXT_PUBLIC_COMMENTS_REPO
  const repo = process.env.NEXT_PUBLIC_COMMENTS_REPO_USER
  const repoId = process.env.NEXT_PUBLIC_COMMENTS_REPO_ID
  const category = process.env.NEXT_PUBLIC_COMMENTS_CATEGORY
  const categoryId = process.env.NEXT_PUBLIC_COMMENTS_CATEGORY_ID

  return (
    <article className="container py-6 max-w-3xl mx-auto prose prose-inline-code:text-blue-500 prose-inline-code:rounded prose-inline-code:border prose-inline-code:before:content-['`'] prose-inline-code:before:text-black prose-inline-code:before:font-normal prose-inline-code:after:content-['`'] prose-inline-code:after:text-black prose-inline-code:after:font-normal dark:prose-inline-code:before:text-white dark:prose-inline-code:after:text-white dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />

      <MDXContent code={post.body} />

      <Comments
        repo={`${user}/${repo}`}
        repoId={repoId || ''}
        category={category}
        categoryId={categoryId}
        mapping="specific"
      />
    </article>
  )
}

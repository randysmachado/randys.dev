import { defineConfig, defineCollection, s } from 'velite'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/')
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      body: s.mdx()
    })
    .transform(computedFields)
})

const notes = defineCollection({
  name: 'Notes',
  pattern: 'notes/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      // title: s.string().max(99),
      // description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      // tags: s.array(s.string()).optional(),
      body: s.mdx()
    })
    .transform(computedFields)
})

export default defineConfig({
  root: 'src/posts',
  output: {
    data: '.velite',
    assets: 'public/uploads',
    base: '/uploads/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { posts, notes },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'one-dark-pro' }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link para seção'
          }
        }
      ]
    ],
    remarkPlugins: []
  }
})

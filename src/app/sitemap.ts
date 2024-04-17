import { MetadataRoute } from 'next'

import { posts } from '#site/content'
import { getAllTags, sortTagsByCount } from '@/lib/utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapPost: MetadataRoute.Sitemap = posts.map((post) => {
    return {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slugAsParams}`,
      priority: 1.0,
      changeFrequency: 'daily',
      lastModified: post.date
    }
  })

  // const tags = getAllTags(posts)
  // const sortedTags = sortTagsByCount(tags)

  // const sitemapTags: MetadataRoute.Sitemap = posts.map((post) => {
  //   const tag = sortedTags.map((tag) => {
  //     return {
  //       url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${tag}`,
  //       priority: 1.0,
  //       changeFrequency: 'daily',
  //       lastModified: post.date
  //     }
  //   })

  //   return tag
  // })

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      priority: 1.0,
      changeFrequency: 'daily',
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/sobre`,
      priority: 1.0,
      changeFrequency: 'daily',
      lastModified: new Date()
    },
    ...sitemapPost,
    ...sitemapTags
  ]
}

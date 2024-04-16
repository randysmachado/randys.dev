import { MetadataRoute } from 'next'

import { posts } from '#site/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapPost: MetadataRoute.Sitemap = posts.map((post) => {
    return {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slugAsParams}`,
      priority: 1.0,
      changeFrequency: 'daily',
      lastModified: post.date
    }
  })

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
    ...sitemapPost
  ]
}

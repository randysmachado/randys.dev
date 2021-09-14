import { getServerSideSitemap } from 'next-sitemap'

import { getAllPosts } from 'services/api'

export const getServerSideProps = (ctx) => {
  // Method to source urls from cms
  const allPosts = getAllPosts()

  const fields = allPosts.map(({ slug }) => ({
    loc: `https://randys.dev/${slug}`,
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: 'https://randys.dev',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://randys.dev/about',
      lastmod: new Date().toISOString()
    }
  )

  console.log(fields)

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {}

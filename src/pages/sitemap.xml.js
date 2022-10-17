import { getAllPosts } from 'lib/posts'

const BLOG_URL = 'https://randys.dev'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map(({ slug }) => {
        return `
      <url>
          <loc>${`${BLOG_URL}/${slug}`}</loc>
          <priority>0.3</priority>
          <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `
      })
      .join('')}
  </urlset>
`
}

const SiteMap = () => {}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts(['slug'])
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap

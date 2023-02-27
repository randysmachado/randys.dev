import { getAllPosts } from 'lib/posts'
import { getPagePaths } from 'lib/readingPages'

const BLOG_URL = 'https://randys.dev'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${`${BLOG_URL}`}</loc>
        <priority>1.0</priority>
        <changefreq>daily</changefreq>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    ${posts
      .map(({ slug }) => {
        return `
      <url>
          <loc>${`${BLOG_URL}/${slug}`}</loc>
          <priority>1.0</priority>
          <changefreq>daily</changefreq>
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
  const pages = getPagePaths(['slug'])
  const all = [...pages, ...posts]

  const sitemap = generateSiteMap(all)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap

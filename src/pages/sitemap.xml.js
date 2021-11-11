import { getAllPosts } from 'services/api'

const generateSitemap = (data, origin) => {
  let xml = ''

  data.map((page) => {
    xml += `<url>
      <loc>${origin + page.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>`
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xml}
    </urlset>`
}

export async function getServerSideProps({ res }) {
  const data = getAllPosts()

  res.setHeader('Content-Type', 'text/xml')
  res.write(generateSitemap(data, 'http://randys.dev/'))
  res.end()

  return {
    props: {}
  }
}

const SitemapIndex = () => null
export default SitemapIndex

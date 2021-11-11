const generateSitemap = (data, origin) => {
  let xml = ''

  data.pages.map((page) => {
    xml += `<url>
      <loc>${origin + page.location}</loc>
      <lastmod>${page.lastMod}</lastmod>
    </url>`
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xml}
    </urlset>`
}

export async function getServerSideProps({ res }) {
  const data = res.setHeader('Content-Type', 'text/xml')
  res.write(generateSitemap(data, 'https://randys.dev'))
  res.end()

  return {
    props: {}
  }
}

const SitemapIndex = () => null
export default SitemapIndex

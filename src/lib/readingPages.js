import fs from 'fs'
import { join } from 'path'

const pageDirectory = join(process.cwd(), 'src/pages')

export function getPagePaths() {
  const staticPaths = fs
    .readdirSync(pageDirectory)
    .filter((staticPage) => {
      return ![
        'admin',
        'api',
        '_app.jsx',
        '_document.jsx',
        '404.jsx',
        'sitemap.jsx',
        '[slug].jsx',
        'index.jsx',
        'posts.jsx',
        'sitemap.xml.js'
      ].includes(staticPage)
    })
    .map((page) => {
      return { slug: page }
    })

  return staticPaths
}

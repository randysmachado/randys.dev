import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const postDirectory = join(process.cwd(), 'src/posts')

export function getPost(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  const { data, content } = matter(fileContents)

  const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR
  })

  return {
    slug: realSlug,
    date: data.date.toString(),
    frontmatter: { ...data, date },
    content
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postDirectory)

  const posts = slugs
    .map((slug) => getPost(slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    )

  return posts
}

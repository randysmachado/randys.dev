import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'

const postDirectory = join(process.cwd(), 'src/posts')

// function getMarkdownFiles() {
//   return fs.readdirSync(postDirectory)
// }

export function getPosts(slugOrFilename) {
  const slug = slugOrFilename.replace(/\.md$/, '')
  const directory = join(postDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(directory, 'utf-8')

  const { data, content } = matter(fileContents)

  const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return {
    slug,
    date: data.date.toString(),
    frontmatter: { ...data, date },
    content
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postDirectory)

  const posts = slugs
    .map((slug) => getPosts(slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    )

  return posts
}

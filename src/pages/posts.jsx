import { getAllPosts } from 'lib/posts'

import ArticlesTemplate from 'templates/Articles'

export default function Articles({ posts }) {
  return (
    <>
      <ArticlesTemplate posts={posts} title="Todas as postagens" />
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'date',
    'title',
    'description',
    'category',
    'thumbnail',
    'slug'
  ])

  const homePosts = posts.slice(0, 4)

  return {
    props: {
      posts,
      homePosts
    }
  }
}

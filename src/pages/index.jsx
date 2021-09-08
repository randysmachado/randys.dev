import HomeTemplate from 'templates/Home'

import { getAllPosts } from 'services/api'

export default function Home({ posts }) {
  return <HomeTemplate posts={posts} />
}

export function getStaticProps() {
  const posts = getAllPosts([
    'date',
    'title',
    'description',
    'category',
    'color',
    'slug'
  ])

  return {
    props: {
      posts
    }
  }
}

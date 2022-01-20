import HomeTemplate from 'templates/Home'

import { getAllPosts } from 'services/api'
import Footer from 'components/Footer'

export default function Home({ posts }) {
  return (
    <>
      <HomeTemplate posts={posts} />
      <Footer />
    </>
  )
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

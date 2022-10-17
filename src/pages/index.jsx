import { getAllPosts } from 'lib/posts'
import Home from 'templates/Home'

export default function Index({ homePosts }) {
  return (
    <>
      <Home homePosts={homePosts} />
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

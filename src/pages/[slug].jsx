import Post from 'components/Post'
import { getAllPosts, getPost } from 'lib/posts'
import markdownToHtml from 'lib/markdown'
import Base from 'templates/Base'

export default function Page({ post }) {
  return (
    <Base>
      <Post post={post} />
    </Base>
  )
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug)

  post.content = await markdownToHtml(post.content)

  return {
    props: { post }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),

    fallback: false
  }
}

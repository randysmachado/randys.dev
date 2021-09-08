import BlogPost from 'components/BlogPost'
import { getAllPosts, getPosts } from 'services/api'
import markdown from 'services/markdown'

export default function Page({ post }) {
  return <BlogPost post={post} />
}

export async function getStaticProps({ params }) {
  const post = getPosts(params.slug)

  post.content = await markdown.toHTML(post.content)
  return {
    props: { post }
  }
}

export function getStaticPaths() {
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

import * as S from './styles'

import Link from 'next/link'

const PostsList = ({ posts }) => {
  return (
    <S.Wrapper>
      {posts.map((post, index) => (
        <S.PostsListItem key={index}>
          <S.Header>
            <span style={{ color: `${post.frontmatter.color}` }}>
              {post.frontmatter.category}
            </span>
            <span>{post.frontmatter.date}</span>
          </S.Header>
          <Link href={`/${encodeURIComponent(post.slug)}`}>
            <a>{post.frontmatter.title}</a>
          </Link>
          <S.Description>{post.frontmatter.description}</S.Description>
        </S.PostsListItem>
      ))}
    </S.Wrapper>
  )
}

export default PostsList

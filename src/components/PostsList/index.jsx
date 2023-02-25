import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

const PostList = ({ posts, title, active }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/${post.slug}`} passHref>
            <S.Link>
              <Image
                src={post.frontmatter.thumbnail}
                width={500}
                height={200}
                layout="responsive"
                objectFit="cover"
                priority
                alt={post.frontmatter.title}
              />

              <span>{post.frontmatter.title}</span>
              <S.Description>{post.frontmatter.description}</S.Description>
              <S.Category>{post.frontmatter.category}</S.Category>
            </S.Link>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/posts" passHref>
      <S.Button active={active}>Todas as postagens</S.Button>
    </Link>
  </S.Wrapper>
)

export default PostList

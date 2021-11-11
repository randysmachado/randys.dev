import { NextSeo } from 'next-seo'

import Link from 'next/link'
import Prism from 'prismjs'
import { useEffect } from 'react'

import Comments from 'components/Commnets'

import * as S from './styled'
import { Container } from 'components/Container/styled'

const BlogPost = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <NextSeo
        title={`${post.frontmatter.title} - Randys Machado`}
        description={
          post.frontmatter.description ||
          'Blog sobre desenvolvimento front-end escrito por Randys Machado.'
        }
        canonical="https://randys.dev"
        openGraph={{
          url: 'https://randys.dev',
          title: `${post.frontmatter.title} - Randys Machado`,
          description:
            post.frontmatter.description ||
            'Blog sobre desenvolvimento front-end escrito por Randys Machado.'
        }}
      />
      <S.Header>
        <Container>
          <S.EntryHeader>
            <Link href="/">
              <a>🠀 Voltar para Home</a>
            </Link>
            <S.Time>
              <span style={{ color: `${post.frontmatter.color}` }}>
                {post.frontmatter.category}
              </span>
              <span>{post.frontmatter.date}</span>
            </S.Time>
          </S.EntryHeader>
          <S.Title>{post.frontmatter.title}</S.Title>
          <S.Description>{post.frontmatter.description}</S.Description>
        </Container>
      </S.Header>

      <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />

      <Comments />
    </>
  )
}

export default BlogPost

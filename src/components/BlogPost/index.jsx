import { NextSeo } from 'next-seo'

import Link from 'next/link'
import Prism from 'prismjs'
import { useEffect } from 'react'

import * as S from './styled'

const BlogPost = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <S.Wrapper>
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
        <S.EntryHeader>
          <Link href="/">
            <a>🠀 Voltar para Home</a>
          </Link>
          <span style={{ color: `${post.frontmatter.color}` }}>
            {post.frontmatter.category}
          </span>
          <span>{post.frontmatter.date}</span>
        </S.EntryHeader>
        <S.Title>{post.frontmatter.title}</S.Title>
        <S.Description>{post.frontmatter.description}</S.Description>
      </S.Header>
      <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </S.Wrapper>
  )
}

export default BlogPost

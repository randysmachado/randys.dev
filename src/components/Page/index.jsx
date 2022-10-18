import { NextSeo } from 'next-seo'
import Image from 'next/image'
import * as S from './styles'

const Post = ({ post }) => {
  return (
    <S.Wrapper>
      <NextSeo
        title={post.frontmatter.title}
        titleTemplate="%s | Randys Machado"
        description={post.frontmatter.description}
        canonical="https://randys.dev"
        openGraph={{
          url: 'https://randys.dev',
          title: post.frontmatter.title,
          description: post.frontmatter.description,
          images: [
            {
              url: post.frontmatter.thumbnail,
              alt: post.frontmatter.title
            }
          ]
        }}
      />
      <S.Header>
        <span>{post.frontmatter.category}</span>
        <S.Title>{post.frontmatter.title}</S.Title>
        <S.Description>{post.frontmatter.description}</S.Description>
        <S.FeatureImage>
          <Image
            src={post.frontmatter.thumbnail}
            layout="responsive"
            width={960}
            height={400}
            alt={post.frontmatter.title}
          />
        </S.FeatureImage>
      </S.Header>
      <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />
      <S.Footer>
        Tags:
        {post.frontmatter.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </S.Footer>
    </S.Wrapper>
  )
}

export default Post

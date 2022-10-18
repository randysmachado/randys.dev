import { Container } from 'components/Container'
import PostList from 'components/PostsList'
import { NextSeo } from 'next-seo'
import Base from 'templates/Base'

const Articles = ({ posts }) => (
  <Base>
    <Container>
      <NextSeo
        title="Todas as postagens"
        titleTemplate="%s | Randys Machado"
        description="Blog sobre desenvolvimento web e outras coisas. Escrito por Randys Machado."
        canonical="https://randys.dev"
        openGraph={{
          url: 'https://randys.dev',
          title: 'Randys Machado',
          description:
            'Blog sobre desenvolvimento web e outras coisas. Escrito por Randys Machado.',
          images: [
            {
              url: 'https://randys.dev/images/cover.png',
              width: 1280,
              height: 720,
              alt: 'Randys Machado'
            }
          ],
          site_name: 'Randys Machado'
        }}
      />
      <PostList posts={posts} title="Todas as postagens" active={false} />
    </Container>
  </Base>
)

export default Articles

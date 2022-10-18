import { NextSeo } from 'next-seo'

import { Container } from 'components/Container'
import Hero from 'components/Hero'
import PostList from 'components/PostsList'
import Base from 'templates/Base'

const Home = ({ homePosts }) => (
  <Base>
    <NextSeo
      title="Home"
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
    <Container>
      <Hero />
      <PostList posts={homePosts} title="Últimas postagens" active={true} />
    </Container>
  </Base>
)

export default Home

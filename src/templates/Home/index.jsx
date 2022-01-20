import { NextSeo } from 'next-seo'

import PostsList from 'components/PostsList'
import Profile from 'components/Profile'

const HomeTemplate = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Olá, sou o Randys Machado"
        description="Blog sobre desenvolvimento front-end escrito por Randys Machado"
        canonical="https://randys.dev"
        openGraph={{
          url: 'https://randys.dev',
          title: 'Olá, sou o Randys Machado',
          description:
            'Blog sobre desenvolvimento front-end escrito por Randys Machado.',
          images: [
            {
              url: 'https://randys.dev/images/cover.png',
              width: 1280,
              height: 720,
              alt: 'Olá, sou o Randys Machado'
            }
          ],
          site_name: 'Olá, sou o Randys Machado'
        }}
      />
      <Profile />
      <PostsList posts={posts} />
    </>
  )
}

export default HomeTemplate

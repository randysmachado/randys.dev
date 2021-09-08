import { NextSeo } from 'next-seo'

import PostsList from 'components/PostsList'
import Profile from 'components/Profile'

const HomeTemplate = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Randys Machado Blog"
        description="Blog sobre desenvolvimento front-end escrito por Randys Machado"
        canonical="https://randys.dev"
        openGraph={{
          url: 'https://randys.dev',
          title: 'Randys Machado Blog',
          description:
            'Blog sobre desenvolvimento front-end escrito por Randys Machado.',
          images: [
            {
              url: 'https://randys.dev/images/cover.png',
              width: 1280,
              height: 720,
              alt: 'Randys Machado Blog'
            }
          ],
          site_name: 'Randys Machado Blog'
        }}
      />
      <Profile />
      <PostsList posts={posts} />
    </>
  )
}

export default HomeTemplate

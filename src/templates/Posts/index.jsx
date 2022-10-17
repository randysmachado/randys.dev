import { Container } from 'components/Container'
import PostList from 'components/PostsList'
import Base from 'templates/Base'

const Posts = ({ posts }) => (
  <Base>
    <Container>
      <PostList posts={posts} />
    </Container>
  </Base>
)

export default Posts

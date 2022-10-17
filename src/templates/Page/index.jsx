import { Container } from 'components/Container'
import Base from 'templates/Base'

const PageTemplate = ({ children }) => (
  <Base>
    <Container>{children}</Container>
  </Base>
)

export default PageTemplate

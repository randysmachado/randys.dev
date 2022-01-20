import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem 2rem;

  ${media.lessThan('medium')`
    padding: 0 2rem;
  `}
`

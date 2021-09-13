import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 2rem;
  background-color: var(--border);
`

export const Header = styled.header`
  font-size: 1.8rem;
  font-weight: 400;

  span + span {
    margin-left: 1rem;
  }
`

export const PostsListItem = styled.section`
  a {
    font-size: 4rem;
    color: var(--white);
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: var(--highlight);
    }

    ${media.lessThan('medium')`
      font-size: 3rem;
    `}
  }

  & + section {
    margin-top: 4rem;
  }
`

export const Description = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;

  ${media.lessThan('medium')`
    font-size: 2rem;
  `}
`

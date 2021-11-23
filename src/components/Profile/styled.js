import styled from 'styled-components'
import media from 'styled-media-query'
import Image from 'next/image'

export const Wrapper = styled.header`
  background-color: var(--profile-bg);
  border-bottom: 2px solid var(--profile-border);
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  ${media.lessThan('medium')`
    padding: 0 2rem;
  `}
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    padding: 2rem;
  `}
`

export const Avatar = styled(Image)`
  border-radius: 50%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 6px 10px;
  margin-right: 10rem;

  ${media.lessThan('medium')`
   max-width: 100px;
  `}
`

export const Info = styled.div``

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;

  ${media.lessThan('medium')`
    font-size: 3rem;
    margin-top: 2rem;
  `}
`

export const Description = styled.p`
  font-size: 2.4rem;
  max-width: 700px;
  margin-bottom: 1.6rem;

  ${media.lessThan('medium')`
    font-size: 2rem;
  `}
`

export const Social = styled.ul`
  display: flex;
  align-items: center;
`

export const SocialItem = styled.li`
  svg {
    width: 3.6rem;
  }

  a {
    font-size: 1.8rem;
    color: var(--white);
    transition: color 0.3s;

    &:hover {
      color: var(--highlight);
    }
  }

  &:not(:first-child) {
    margin-left: 1.6rem;
  }
`

import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  background-color: var(--surface);
  border-bottom: 2px solid #282b3b;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 2rem;

  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    padding: 2rem;
  `}
`

export const Avatar = styled.img`
  max-width: 200px;
  border-radius: 50%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 6px 10px;

  ${media.lessThan('medium')`
   max-width: 100px;
  `}
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: var(--highlight);

  ${media.lessThan('medium')`
    font-size: 3rem;
    margin-top: 2rem;
  `}
`

export const Description = styled.p`
  font-size: 2.4rem;
  margin-top: 2rem;
  max-width: 700px;

  ${media.lessThan('medium')`
    font-size: 2rem;
  `}

  a {
    padding: 0 0.3rem;

    &:nth-child(1) {
      color: #1da1f2;
      border-bottom: 2px solid #1da1f2;
      transition: background-color 0.3s;

      &:hover {
        color: var(--primary);
        background-color: #1da1f2;
      }
    }

    &:nth-child(2) {
      color: #bbc6cc;
      border-bottom: 2px solid #bbc6cc;
      transition: background-color 0.3s;

      &:hover {
        color: var(--primary);
        background-color: #bbc6cc;
      }
    }

    &:nth-child(3) {
      color: #d62976;
      border-bottom: 2px solid #d62976;
      transition: background-color 0.3s;

      &:hover {
        color: var(--primary);
        background-color: #d62976;
      }
    }
  }
`

export const Social = styled.ul`
  display: flex;
  align-items: center;
`

export const SocialItem = styled.li`
  a {
    font-size: 1.8rem;
  }

  &:nth-child(1) a {
    color: #bbc6cc;
    padding: 0.5rem;

    &:hover {
      color: var(--primary);
      background-color: #bbc6cc;
    }
  }

  &:nth-child(2) a {
    color: #1da1f2;
    padding: 0.5rem;

    &:hover {
      color: var(--primary);
      background-color: #1da1f2;
    }
  }

  &:nth-child(3) a {
    color: #d62976;
    padding: 0.5rem;

    &:hover {
      color: var(--primary);
      background-color: #d62976;
    }
  }

  + li {
    margin-left: 10px;
  }
`

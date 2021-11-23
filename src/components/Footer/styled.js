import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: var(--profile-bg);
  border-top: 2px solid var(--profile-border);
  color: var(--white);
  text-align: center;
  padding: 1.6rem 0;
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    &:not(:first-child) {
      margin-left: 1rem;
    }

    a {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: var(--white);
      font-weight: bold;

      &:hover {
        border-bottom: 2px solid var(--white);
      }
    }
  }
`

export const Copyright = styled.p`
  margin-top: 2rem;

  a {
    color: var(--white);
    font-weight: bold;

    &:hover {
      border-bottom: 2px solid var(--white);
    }
  }
`

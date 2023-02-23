import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2rem;
  text-align: center;
`

export const Spotify = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  svg {
    margin-right: 1rem;
  }
`

export const Copyright = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};

    a {
      color: ${theme.colors.secondary};
    }
  `}
`

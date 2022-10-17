import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-family: ${theme.font.fontMono};
    padding: 2rem;
    text-align: center;
  `}
`

export const Copyright = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};

    a {
      color: ${theme.colors.secondary};
    }
  `}
`

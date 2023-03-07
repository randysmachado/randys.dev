import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    max-width: 120rem;
    margin-left: auto;
    margin-right: auto;
    padding: ${theme.grid.gutter} calc(${theme.grid.gutter} / 2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  `}
`

export const Spotify = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    a {
      position: relative;
      transition: 0.2s;

      &:hover {
        color: ${theme.colors.secondary};
      }
    }

    svg {
      margin-right: 1rem;
    }
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

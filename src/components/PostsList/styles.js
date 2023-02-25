import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  mobile: '680px'
})

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: calc(${theme.grid.gutter} / 2);
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        justify-content: center;
        transition: transform 0.2s;

        ${customMedia.lessThan('mobile')`
          &:not(:first-child) {
            margin-top: 2rem;
          }
        `}
      }
    }
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 4rem;
    font-size: 2.4rem;
    font-weight: bold;
    color: ${theme.colors.gray100};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    border: 2px solid ${theme.colors.border};
    transition: transform 0.2s;
    padding: 2rem;
    font-size: 2.2rem;
    transition: color 0.2s;
    color: ${theme.colors.gray100};
    font-weight: ${theme.font.bold};
    width: 100%;

    span {
      margin-top: 1rem;
    }

    &:hover {
      box-shadow: 0 20px 30px -15px ${theme.colors.border};
      transform: translateY(-7px);
    }
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray200};
    margin-top: 1rem;
  `}
`

export const Category = styled.h3`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: ${theme.font.light};
    color: ${theme.colors.secondary};
    font-family: ${theme.font.fontMono};
    margin-top: 2.4rem;
  `}
`

export const Button = styled.a`
  ${({ theme, active }) => css`
    display: ${active ? 'block' : 'none'};
    width: 24rem;
    border-radius: 4px;
    color: ${theme.colors.primaryLight};
    background-color: ${theme.colors.secondary};
    padding: 1.2rem;
    font-weight: ${theme.font.bold};
    margin: 6rem auto;
    transition: background 0.3s;
    text-align: center;

    &:hover {
      background-color: ${darken(0.1, theme.colors.secondary)};
      color: ${theme.colors.primaryLight};
    }
  `}
`

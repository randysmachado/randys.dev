import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      gap: calc(${theme.grid.gutter} / 2);
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        justify-content: center;
        transition: transform 0.2s;
      }
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.fontMono};
    margin-bottom: 4rem;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.primaryLight};
    border-radius: 4px;
    border-left: 4px solid ${theme.colors.secondary};
    transition: transform 0.2s;
    padding: 2rem;
    font-size: 2.2rem;
    transition: color 0.2s;
    color: ${theme.colors.grayLight};
    font-weight: ${theme.font.bold};
    width: 100%;

    &:hover {
      box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
      transform: translateY(-7px);
    }
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};
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
    border: 2px solid ${theme.colors.secondary};
    border-radius: 4px;
    color: ${theme.colors.secondary};
    background-color: transparent;
    padding: 2rem;
    font-family: ${theme.font.fontMono};
    margin: 6rem auto;
    transition: background 0.3s;
    text-align: center;

    &:hover {
      background-color: ${theme.colors.secondaryHover};
    }
  `}
`

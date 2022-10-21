import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin: 8rem 0;

  ${media.greaterThan('medium')`
    justify-content: space-between;
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    span {
      color: ${theme.colors.secondary};
      margin-bottom: 0.8rem;
      display: block;
      letter-spacing: 0.1rem;
    }

    h1 {
      font-size: clamp(3rem, 7vw, 6rem);
      line-height: 1.2;
    }

    h2 {
      font-size: clamp(2rem, 5vw, 4rem);
      color: ${theme.colors.gray200};
    }
  `}
`

export const Image = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 200px;
    width: 100%;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: ${theme.border.radius};
    }

    &::after {
      border: 2px solid ${theme.colors.secondary};
      top: 20px;
      left: 20px;
    }
  `}
`

export const Avatar = styled.figure`
  position: relative;

  ${({ theme }) => css`
    img {
      z-index: 100;
      border-radius: ${theme.border.radius};
    }
  `}
`

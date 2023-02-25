import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    min-height: calc(100vh - 30rem);
    margin-top: 4rem;
    margin-bottom: 8rem;

    a {
      color: ${theme.colors.secondary};
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background-color: ${theme.colors.secondary};
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      }
      &:hover::before {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
  `}
`

export const Info = styled.div`
  margin-bottom: 6rem;
`

export const Title = styled.h1`
  /* font-size: 4.6rem; */
  font-size: clamp(3.8rem, 7vw, 4.8rem);
  margin-bottom: 2rem;
`

export const Subtitle = styled.h2`
  /* font-size: 3.2rem; */
  font-size: clamp(2.6rem, 7vw, 3.2rem);
  margin-bottom: 1rem;
  margin-top: 3rem;
`

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`

export const Contact = styled.div`
  padding: 3rem 0;
`

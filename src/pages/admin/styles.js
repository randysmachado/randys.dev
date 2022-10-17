import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 4rem;
    color: ${theme.colors.secondary};
  `}
`

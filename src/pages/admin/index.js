import dynamic from 'next/dynamic'

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

const CMS_CONFIG = {}

const Loading = () => (
  <Wrapper>
    <Text>Loading...</Text>
  </Wrapper>
)

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((CMS) => {
      CMS.init({ CMS_CONFIG })
    }),
  { ssr: false, loading: Loading }
)

const Admin = () => <CMS />

export default Admin

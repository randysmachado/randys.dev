import dynamic from 'next/dynamic'

import * as S from './styles'

const CMS_CONFIG = {}

const Loading = () => (
  <S.Wrapper>
    <S.Text>Loading...</S.Text>
  </S.Wrapper>
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

import Social from 'components/Social'

import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <S.Copyright>
      Criado por{' '}
      <a
        href="https://instagram.com/randysmachado"
        target="_blank"
        rel="noreferrer"
      >
        Randys Machado
      </a>
    </S.Copyright>
    <Social size={30} />
  </S.Footer>
)

export default Footer

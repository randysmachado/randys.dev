import Social from 'components/Social'
import Image from 'next/image'

import * as S from './styles'

const Hero = () => (
  <S.Wrapper>
    <S.Text>
      <span>Olá, meu nome é</span>
      <h1>Randys Machado.</h1>
      <h2>Desenvolvedor Web.</h2>

      <Social size={36} />
    </S.Text>

    <S.Image>
      <S.Avatar>
        <Image
          src="/images/avatar.png"
          alt="Randys Machado"
          width={250}
          height={250}
          layout="responsive"
        />
      </S.Avatar>
    </S.Image>
  </S.Wrapper>
)

export default Hero

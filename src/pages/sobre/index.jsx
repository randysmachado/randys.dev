import { NextSeo } from 'next-seo'

import Social from 'components/Social'
import PageTemplate from 'templates/Page'

import * as S from './styles'

const Sobre = () => (
  <PageTemplate>
    <NextSeo
      title="Sobre mim - Randys Machado"
      description="Blog sobre desenvolvimento web e outras coisas. Escrito por Randys Machado."
      canonical="https://randys.dev"
      openGraph={{
        url: 'https://randys.dev',
        title: 'Randys Machado',
        description:
          'Blog sobre desenvolvimento web e outras coisas. Escrito por Randys Machado.',
        images: [
          {
            url: 'https://randys.dev/images/cover.png',
            width: 1280,
            height: 720,
            alt: 'Randys Machado'
          }
        ],
        site_name: 'Randys Machado'
      }}
    />
    <S.Wrapper>
      <S.Title>Sobre mim</S.Title>
      <S.Paragraph>
        Meu nome Randys Machado, goiano do pé rachado, nascido em Porangatu.
      </S.Paragraph>
      <S.Paragraph>
        Comecei a trabalhar com T.I aos 18 anos com manutenção em computadores e
        fazendo suporte em software de automação comercial.
      </S.Paragraph>

      <S.Paragraph>
        Trabalho com desenvolvimento web há mais de 6 anos, onde comecei
        trabalhando como freelancer para empresas locais e hoje trabalho
        prestando serviço para duas grandes empresas. Sou formado em Sistemas de
        Informação para UEG.
      </S.Paragraph>

      <S.Contact>
        <S.Paragraph>
          Quer dizer um oi, ou fazer alguma pergunta? Entre em contato comigo
          através das minhas redes sociais.
        </S.Paragraph>
        <S.Paragraph></S.Paragraph>
        <Social size={30} />
      </S.Contact>
    </S.Wrapper>
  </PageTemplate>
)

export default Sobre

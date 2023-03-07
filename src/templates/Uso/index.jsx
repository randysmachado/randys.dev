import { NextSeo } from 'next-seo'

import PageTemplate from 'templates/Page'

import { hardwares, softwaresCode, softwaresApp } from './data'

import * as S from './styles'

const UsePage = () => (
  <PageTemplate>
    <NextSeo
      title="Meu Setup"
      titleTemplate="%s | Randys Machado"
      description="Blog sobre Desenvolvimento Web e Tecnologia | Dicas, Tutoriais sobre HTML, CSS, JavaScript, NextJS, React, WordPress, PHP  | Escrito por Randys Machado"
      canonical="https://randys.dev"
      openGraph={{
        url: 'https://randys.dev',
        title: 'Randys Machado',
        description:
          'Blog sobre Desenvolvimento Web e Tecnologia | Dicas, Tutoriais sobre HTML, CSS, JavaScript, NextJS, React, WordPress, PHP  | Escrito por Randys Machado',
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
      <S.Info>
        <S.Title>Meu Setup e umas coisas que uso</S.Title>
        <S.Paragraph>
          Aqui estão algumas coisas que utilizo atualmente para desenvolver
          diariamente. Esta lista está sempre mudando.
        </S.Paragraph>
      </S.Info>

      <S.Subtitle>Hardware</S.Subtitle>
      <ul>
        {hardwares.map((hardware) => (
          <li key={hardware.name}>
            <span>{hardware.name} - </span>
            <a
              href={hardware.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Link
            </a>
            {hardware?.link2 && (
              <>
                {' | '}
                <a
                  href={hardware.link2}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Link
                </a>
              </>
            )}
          </li>
        ))}
      </ul>

      <S.Subtitle>Softwares para Codar</S.Subtitle>
      <ul>
        {softwaresCode.map((hardware) => (
          <li key={hardware.name}>
            <span>{hardware.name} - </span>
            <a
              href={hardware.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Link
            </a>
          </li>
        ))}
      </ul>

      <S.Subtitle>Softwares e outros aplicativos</S.Subtitle>
      <ul>
        {softwaresApp.map((hardware) => (
          <li key={hardware.name}>
            <span>{hardware.name} - </span>
            <a
              href={hardware.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Link
            </a>
          </li>
        ))}
      </ul>
    </S.Wrapper>
  </PageTemplate>
)

export default UsePage

import { Github, Twitter, Instagram } from '@styled-icons/boxicons-logos'

import * as S from './styled'

import { content } from './content'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Info>
            <S.Title>Olá, sou o Randys 👋</S.Title>
            <S.Description>Desenvolvedor front-end</S.Description>
            <S.Social>
              <S.SocialItem>
                <a href={`${content[1].url}`} target="_blank" rel="noreferrer">
                  <Twitter />
                </a>
              </S.SocialItem>
              <S.SocialItem>
                <a href={`${content[0].url}`} target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </S.SocialItem>
              <S.SocialItem>
                <a href={`${content[2].url}`} target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
              </S.SocialItem>
            </S.Social>
          </S.Info>
          <S.Avatar src="/images/avatar.jpg" alt="Randys Machado" />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default Profile

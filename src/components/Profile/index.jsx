import { Github, Twitter, Instagram } from '@styled-icons/boxicons-logos'

import * as S from './styled'
import { content } from './content'
import profilePic from '/public/images/avatar.jpg'

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
                <a
                  href={`${content[1].url}`}
                  target="_blank"
                  rel="noreferrer"
                  alt="Ícone do Twitter"
                  title="Twitter"
                >
                  <Twitter />
                </a>
              </S.SocialItem>
              <S.SocialItem>
                <a
                  href={`${content[0].url}`}
                  target="_blank"
                  rel="noreferrer"
                  alt="Ícone do Github"
                  title="Github"
                >
                  <Github />
                </a>
              </S.SocialItem>
              <S.SocialItem>
                <a
                  href={`${content[2].url}`}
                  target="_blank"
                  rel="noreferrer"
                  alt="Ícone do Instagram"
                  title="Instagram"
                >
                  <Instagram />
                </a>
              </S.SocialItem>
            </S.Social>
          </S.Info>
          <S.Avatar
            src={profilePic}
            alt="Foto de Perfil do Randys Machado"
            title="Randys Machado"
            width={150}
            height={150}
          />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default Profile

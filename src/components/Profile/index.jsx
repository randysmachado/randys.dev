import * as S from './styled'
import { content } from './content'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Info>
          <div>
            <S.Title>Olá, sou o Randys 👋</S.Title>
            <S.Description>Desenvolvedor front-end</S.Description>
            <S.Description>
              Falo um pouco sobre minha jornada no{' '}
              <a href={`${content[1].url}`} target="_blank" rel="noreferrer">
                {content[1].name}
              </a>
              , faço uns commits no{' '}
              <a href={`${content[0].url}`} target="_blank" rel="noreferrer">
                {content[0].name}
              </a>{' '}
              e posto coisas no{' '}
              <a href={`${content[2].url}`} target="_blank" rel="noreferrer">
                {content[2].name}
              </a>
              .
            </S.Description>
          </div>
        </S.Info>
        <S.Avatar src="/images/avatar.jpg" alt="Randys Machado" />
      </S.Content>
    </S.Wrapper>
  )
}

export default Profile

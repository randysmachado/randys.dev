import useSWR from 'swr'
import { BsSpotify } from 'react-icons/bs'

import fetcher from 'lib/fetcher'

import Social from 'components/Social'

import * as S from './styles'

const Footer = () => {
  const { data: playing } = useSWR('/api/spotify/playing', fetcher)

  return (
    <S.Footer>
      <S.Spotify>
        <BsSpotify size={32} color="#2dd4bf" />
        {playing?.isPlaying
          ? `${playing.artist} - ${playing.title}`
          : 'Nada Tocando'}
      </S.Spotify>

      {console.log(playing)}
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
}

export default Footer

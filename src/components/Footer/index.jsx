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
        {playing?.isPlaying ? (
          <a
            href={playing.songUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {playing.artist} - {playing.title}
          </a>
        ) : (
          'Nada Tocando'
        )}
      </S.Spotify>

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

import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter
} from 'react-icons/ai'

import * as S from './styles'

const Social = ({ size }) => (
  <S.Wrapper>
    <li>
      <a
        href="https://www.github.com/randysmachado/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size={size} />
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/randysmachado/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineInstagram size={size} />
      </a>
    </li>
    <li>
      <a
        href="https://www.twitter.com/randysmachado/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineTwitter size={size} />
      </a>
    </li>
  </S.Wrapper>
)

export default Social

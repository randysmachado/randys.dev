import * as S from './styled'

const Footer = () => {
  return (
    <S.Footer>
      <S.Links>
        <li>
          <a
            href="https://twitter.com/randysmachado"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/randysmachado"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/randysmachado"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </S.Links>

      <S.Copyright>
        Desenvolvido com <a href="https://nextjs.org/">Next JS</a> e hospedado
        na <a href="https://vercel.com/">Vercel</a>
      </S.Copyright>
    </S.Footer>
  )
}

export default Footer

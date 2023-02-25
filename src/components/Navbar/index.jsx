import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import Logo from 'components/Logo'

import * as S from './styles'
import { useState } from 'react'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <S.Wrapper>
      <S.Navbar>
        <S.Logo>
          <Link href="/">
            <a aria-label="Página inicial">
              <Logo />
            </a>
          </Link>
        </S.Logo>

        <S.MenuHamburger onClick={handleOpenMenu}>
          {openMenu ? (
            <AiOutlineClose size={26} />
          ) : (
            <AiOutlineMenu size={26} />
          )}
        </S.MenuHamburger>

        <S.MenuList openMenu={openMenu}>
          <S.MenuItems>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </S.MenuItems>
          <S.MenuItems>
            <Link href="/posts">
              <a>Blog</a>
            </Link>
          </S.MenuItems>
        </S.MenuList>
      </S.Navbar>
    </S.Wrapper>
  )
}

export default Navbar

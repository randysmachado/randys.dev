import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  padding: 0 4.8rem;

  ${media.lessThan('small')`
    padding: 0 2rem;
  `}
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 6rem;
`

export const Logo = styled.div`
  width: 40px;
  height: 47px;
`

export const MenuHamburger = styled.div`
  z-index: 400;
  display: none;

  ${media.lessThan('small')`
    display: block;
  `}
`

export const MenuList = styled.ul`
  ${({ theme, openMenu }) => css`
    margin: 0;
    padding: 0;
    display: flex;

    li:not(:first-child) {
      margin-left: 2rem;
    }

    ${media.lessThan('small')`
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color: ${openMenu ? `${theme.colors.primaryLight}` : 'none'} ;
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
      z-index: 300;
      align-items: center;
      text-align: center;
      padding-top: 10rem;
      opacity: ${openMenu ? 1 : 0};
      transition: ${openMenu ? 'opacity 0.3s ease-in-out' : ''};

      li:not(:first-child) {
        margin-top: 2rem;
        margin-left: 0;
      }
    `}
  `}
`

export const MenuItems = styled.li`
  list-style: none;
  width: 100%;
  padding: 1rem;

  a {
    ${({ theme }) => css`
      transition: color 0.3s;

      &:hover {
        color: ${theme.colors.secondary};
      }
    `}
  }
`

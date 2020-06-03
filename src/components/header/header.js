import React, {useState} from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Logo from "../../images/logo.png"

const StyledHeader = styled.div`
  height: 8vh;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
	justify-content: center;
`

const StyledLink = styled(Link)`
  color: ${({ white, theme }) => white ? theme.colors.secondaryText : theme.colors.special};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: 26px;
  text-decoration: none;
  z-index: 999;
  display: flex;
  align-items: center;
	justify-content: center;
`;


const Hamburger = styled.div`
 position: fixed;
  left:20px;
  z-index: 999;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
	justify-content: center;
    cursor: pointer;
   @media (max-width: 400px) {
    height: 40px;
      width: 40px;
    }
`

const HamburgerInner = styled.div`
 position: fixed;
  width: 30px;
  height: 3px;
  position: absolute;

  background-color: ${({ theme }) => theme.colors.special};
  &::after{
    content: '';
    width: 30px;
    height: 3px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.special};
    transform: ${({ showMenu }) => showMenu ? ' translateX(-10px)' : ' translateX(0px)'};
    transition-duration: 0.5s;
    top:8px;
  }
    &::before{
    content: '';
    width: 30px;
    height: 3px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.special};
    transform: ${({ showMenu }) => showMenu ? 'translateX(-10px)' : '  translateX(0px)'};
    transition-duration: 0.5s;
    top:-8px;
  }
`

const HamburgerLink = styled(Link)`
  margin-top: 20px;
  color: white;
  transition-duration: 4s;
  transition-delay: 0.5s;
  opacity: ${({ showMenu }) => showMenu ? '1' : '0'} ;
  text-decoration: none;
`;

const HamburgerMenu = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  width: 100%;
  z-index: 99;
  top:0;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(.7,.3,.3,.7);
  transform: ${({ showMenu }) => showMenu ? 'translateY(0vh)' : 'translateY(-100vh)'};
  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: center;
`

const StyledLogo = styled.img`
  margin-right: 10px;
  height: 35px;
  width: 35px;
  transition-duration: 0.5s;
    :hover {
     transform: rotate(360deg);
      transition-duration: 0.5s;
  }
`


const Header = () => {
  const [menu, showMenu] = useState(false)

  return (
    <StyledHeader>
        <StyledLink to="/">
        <StyledLogo src={Logo}/>
        BLOG
        </StyledLink>
      <Hamburger onClick={()=> {showMenu(!menu)}}>
        <HamburgerInner showMenu={menu} />
      </Hamburger>
      <HamburgerMenu showMenu={menu}>
        <HamburgerLink showMenu={menu} white to="/about"><h1>O mnie</h1></HamburgerLink>
        <HamburgerLink showMenu={menu} white to="/contact"><h1>Kontakt</h1></HamburgerLink>
      </HamburgerMenu>
    </StyledHeader>
  )
}

export default Header
/*

          */
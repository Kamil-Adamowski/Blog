import React from "react"
import { Link } from "gatsby"
import FacebookIcon from '../../images/facebook.svg'
import InstagramIcon from '../../images/instagram.svg'
import YoutubeIcon from '../../images/youtube.svg'
import LogoIcon from '../../images/logo.png'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const StyledFooter = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  min-height: 20vh;
  width: 100%;

`
const Content = styled.div`
  height: 12vh;
  width: 100%;
	color: ${({ theme }) => theme.colors.secondaryText};
  display: flex;
		flex-direction: column;
  align-items: center;
	justify-content: center;
`
const Icons = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
	justify-content: center;
`

const MediaLink = styled.a`
	margin-top:10px;
 	cursor: pointer;
`
const PrivacyLink = styled(Link)`
	margin-bottom: 15px;
 	cursor: pointer;
	color: ${({ theme }) => theme.colors.secondaryText};
	text-decoration: none;
`

const FooterInfo = styled.div`
  height: 8vh;
  width: 100%;
	 color: ${({ theme }) => theme.colors.secondaryText};
	font-weight: ${({ theme }) => theme.font.bold};
	font-size: 0.8rem;
  display: flex;
	flex-direction: column;
  align-items:center ;
	justify-content: flex-end;
	padding-bottom:10px;
	bottom: 0;
		 @media (max-width: 1000px) {
			font-size: 0.6rem;
    }
`

const StyledLogo = styled.img`
  height: 55px;
  width: 55px;
	margin-top:10px;
  transition-duration: 0.5s;
    :hover {
     transform: rotate(360deg);
      transition-duration: 0.5s;
  }
	@media (max-width: 1000px) {
		height: 35px;
  	width: 35px;
  }
`
const StyledIcon = styled.img`
  height: 25px;
  width: 50px;
	@media (max-width: 1000px) {
		height: 15px;
		margin-bottom:15px;
  }
`
const H3 = styled.h3`
	margin: 8px;
	@media (max-width: 1000px) {
	font-size: 0.8rem;
  }
`


function Footer() {
	const { site } = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
            title
            description
						author
					}
        }
      }
    `
	)

	return (
		<StyledFooter>
			<Content>
					<StyledLogo src={LogoIcon} alt='logoIcon' />
					<H3>{site.siteMetadata.title}</H3>
			</Content>
			<Icons>
				<MediaLink href='/'><StyledIcon src={FacebookIcon} alt='FacebookIcon' /></MediaLink>
				<MediaLink href='/'><StyledIcon src={InstagramIcon} alt='InstagramIcon' /></MediaLink>
				<MediaLink href='/'><StyledIcon src={YoutubeIcon} alt='FacebookIcon' /></MediaLink>
			</Icons>
			<FooterInfo>
				<PrivacyLink to='polityka-prywatnosci'>Polityka prywatnosci</PrivacyLink>
				© {new Date().getFullYear()},
          {` ${site.siteMetadata.author}. All rights reserved`}
			</FooterInfo>
		</StyledFooter>
	)
}

export default Footer

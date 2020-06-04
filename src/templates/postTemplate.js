import React from "react"
import Layout from '../layout/layout'
import styled from 'styled-components';

const Wrapper = styled.div`
	display:flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	padding: 80px 0px;
	width: 40%;
	 @media (max-width: 1100px) {
		 	padding: 80px 10px;
			width: 90%;
   }
	@media (max-width: 600px) {
			padding: 	0px 10px;
			width: 90%;
  }
`
const P = styled.p`
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.font.regular};
	line-height: 1.7;
`

const H1 = styled.h1`
	font-weight: ${({ theme }) => theme.font.regular};
	line-height: 1.7;
	@media (max-width: 600px) {
	font-size: 1.5rem;
  }
`
const H5 = styled.h5`
	margin: 0;
	font-weight: ${({ theme }) => theme.font.regular};
	line-height: 1.7;
`
const H3 = styled.h3`
	font-weight: ${({ theme }) => theme.font.thin};
	line-height: 1.7;
	@media (max-width: 600px) {
		font-size: 0.8rem;
  }
`

const Img = styled.img`
  width: 100%;
  height: 400px;
  @media (max-width: 1100px) {
   height: 450px;
  }
	@media (max-width: 800px) {
    height: 350px;
  }
	@media (max-width: 600px) {
		height: 150px;
  }
`


const postTemplate = ({pageContext: {data}}) => (
	<Layout>
		<Wrapper>
			<Img src={data.thumbnail} alt='' />
			<H3>{`Duration of reading: ${data.durationOfReading}min`}</H3>
			<H1>{data.title}</H1>
			<H5>{`Author: ${data.author.name}`}</H5>
			<P>{data.description}</P>
		</Wrapper>
	</Layout>
)

export default postTemplate

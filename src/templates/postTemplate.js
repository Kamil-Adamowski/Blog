import React from "react"
import Layout from '../layout/layout'

const postTemplate = ({pageContext: {data}}) => (
	<Layout>
		<h1>{data.title}</h1>
		<h5>{`Author: ${data.author.name}`}</h5>
		<p>{data.description}</p>
	</Layout>
)

export default postTemplate

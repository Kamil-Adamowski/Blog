import React from "react"
import Layout from "../components/layout"

const postTemplate = ({pageContext: {data}}) => (
	<Layout>
		<h1>{data.title}</h1>
		<h1>{data.author.name}</h1>
		<h1>{data.description}</h1>
	</Layout>
)

export default postTemplate

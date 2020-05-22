import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data: {allSitePage: {edges}}}) => (
  <Layout>
    <h1>Hello world</h1>
    {edges.map(page => (
      <div>
        <Link key={page.node.path} to={page.node.path}>
          <img src={page.node.context.data.thumbnail} alt='' />
           <h1>{page.node.context.data.title}</h1>
        </Link>

      </div>
    )
    )}
  </Layout>
)

export const allPostsQuery = graphql`
{
	allSitePage(filter:
  {component:{eq:"E:/programming/Blog-1/src/templates/postTemplate.js"} }){
    edges {
      node {
        path
        component
        context {
          data {
            title
            thumbnail
          }
        }
      }
    }
  }
}
`;

export default IndexPage

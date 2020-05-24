import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({data: {blog: {posts}}}) => (
  <Layout>
    {posts.map(post => (
      <Link to={post.slug}>
        {post.title}
      </Link>
    ))}

  </Layout>
)

export const allPostsQuery = graphql`
{
  blog {
    posts {
      title
      thumbnail
      slug
    }
  }
}
`;

export default IndexPage
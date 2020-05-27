import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../layout/layout'


const IndexPage = ({data: {blog: {posts}}}) => (
    <Layout >
      {posts.map(post => (
        <div>
          <Link to={post.slug}>
            <h3>{post.title}</h3>
          </Link>
        </div>
      ))}
    </Layout >
)

export const allPostsQuery = graphql`
{
  blog {
    posts {
      title
      summary
      thumbnail
      slug
    }
  }
}
`;

export default IndexPage
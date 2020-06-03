import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../layout/layout'
import styled from 'styled-components';

const Wrapper = styled.div`
display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 2fr 2fr ;
  gap: 25px 25px;
	padding: 20px 20px;
	width: 80%;
  @media (max-width: 1000px) {
    width: 95%;
    padding: 5px 5px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 2fr;
    width: 100%;
    padding: 10px 10px;
  }
`

const Post = styled(Link)`
  text-decoration: none;
  width: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 350px;
  @media (max-width: 1000px) {
   height: 200px;
  }
  @media (max-width: 600px) {
   height: 150px;
  }
`
const H3 = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
`
const P = styled.p`
  color: ${({ theme }) => theme.colors.dark};
`

const IndexPage = ({data: {blog: {posts}}}) => (
    <Layout>
    <Wrapper>
      {posts.map(post => (
          <Post to={post.slug}>
            <Img src={post.thumbnail} />
            <div>
              <H3>{post.title}</H3>
              <P>{post.summary}</P>
            </div>
          </Post>
      ))}
    </Wrapper>
    </Layout>
)

export const allPostsQuery = graphql`
{
  blog {
    posts {
      title
      summary
      thumbnail
      slug
      publishedAt
    }
  }
}
`;

export default IndexPage
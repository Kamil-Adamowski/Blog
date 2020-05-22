const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const postTemplate = path.resolve(`src/templates/postTemplate.js`)
	const postsQuery = await graphql(`
{
	blog {
 posts: postsConnection(first: 100) {
    edges {
      node {
        updatedAt
        publishedAt
        id
        title
        description
        thumbnail
        slug
        author {
          id
          name
				}
      }
    }
  }
	}
 
}
	`)
	postsQuery.data.blog.posts.edges.forEach(post => {
		createPage({
			path: post.node.slug,
			component: postTemplate,
			context: {
				data: post.node
			},
		})
	})
}

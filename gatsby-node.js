exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.jsx')

  // The Prismic content model no longer guarantees a `post` type.
  // If that type is missing, skip creating legacy post/category pages.
  const queryTypeResult = await graphql(`
    {
      __type(name: "Query") {
        fields {
          name
        }
      }
    }
  `)

  if (queryTypeResult.errors) {
    throw queryTypeResult.errors
  }

  const queryFields = queryTypeResult.data.__type?.fields || []
  const hasAllPrismicPost = queryFields.some((field) => field.name === 'allPrismicPost')

  if (!hasAllPrismicPost) {
    console.warn('[gatsby-node] Skipping legacy post page generation: allPrismicPost is not in schema.')
    return
  }

  const result = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const postsList = result.data.allPrismicPost.edges

  postsList.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })
}

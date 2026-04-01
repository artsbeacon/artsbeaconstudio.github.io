const _ = require('lodash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.jsx')
  const categoryTemplate = require.resolve('./src/templates/category.jsx')

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
            data {
              categories {
                category {
                  document {
                    data {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const categorySet = new Set()
  const postsList = result.data.allPrismicPost.edges

  // Double check that the post has a category assigned
  postsList.forEach((edge) => {
    if (edge.node.data.categories[0].category) {
      edge.node.data.categories.forEach((cat) => {
        categorySet.add(cat.category.document[0].data.name)
      })
    }

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

  const categoryList = Array.from(categorySet)

  categoryList.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}

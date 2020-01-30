const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { slug: { ne: "/" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      markdownRemark(fields: { slug: { eq: "/" } }) {
        fields {
          slug
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })

    createPage({
      path: result.data.markdownRemark.fields.slug,
      component: path.resolve(`./src/templates/home.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: result.data.markdownRemark.fields.slug,
      },
    })
  })
}

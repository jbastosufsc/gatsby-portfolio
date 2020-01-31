const path = require("path")

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { tipo: { eq: "pagina" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      markdownRemark(frontmatter: { tipo: { eq: "home" } }) {
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
      component: path.resolve(`./src/templates/Home/home.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: result.data.markdownRemark.fields.slug,
      },
    })
  })
}

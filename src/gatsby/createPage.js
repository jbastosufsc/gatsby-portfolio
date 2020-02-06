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
    }
  `)

  const queryHome = await graphql(`
    query {
      markdownRemark(frontmatter: { tipo: { eq: "home" } }) {
        fields {
          slug
        }
      }
    }
  `)

  const queryTecnologias = await graphql(`
    query {
      markdownRemark(frontmatter: { tipo: { eq: "tecnologias" } }) {
        fields {
          slug
        }
      }
    }
  `)

  const queryProjetos = await graphql(`
    query {
      markdownRemark(frontmatter: { tipo: { eq: "projetos" } }) {
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
  })

  //cria a pagina Home
  createPage({
    path: queryHome.data.markdownRemark.fields.slug,
    component: path.resolve(`./src/templates/Home/home.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      slug: queryHome.data.markdownRemark.fields.slug,
    },
  })

  //cria pagina Tecnologias
  createPage({
    path: queryTecnologias.data.markdownRemark.fields.slug,
    component: path.resolve(`./src/templates/Tecnologias/tecnologias.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      slug: queryTecnologias.data.markdownRemark.fields.slug,
    },
  })

  //cria pagina Projetos
  createPage({
    path: queryProjetos.data.markdownRemark.fields.slug,
    component: path.resolve(`./src/templates/Projetos/projetos.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      slug: queryProjetos.data.markdownRemark.fields.slug,
    },
  })
}

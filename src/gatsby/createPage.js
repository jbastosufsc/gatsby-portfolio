const path = require("path")

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

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

  const queryContact = await graphql(`
    query {
      markdownRemark(frontmatter: { tipo: { eq: "contact" } }) {
        fields {
          slug
        }
      }
    }
  `)

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

  //cria pagina Contact
  createPage({
    path: queryContact.data.markdownRemark.fields.slug,
    component: path.resolve(`./src/templates/Contact/contact.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      slug: queryContact.data.markdownRemark.fields.slug,
    },
  })
}

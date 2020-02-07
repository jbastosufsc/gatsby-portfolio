import React from "react"
import Layout from "../../components/layout"
import CardProjeto from "../../components/CardProjeto/cardProjeto"

import "./projetos.css"

export default ({ data }) => {
  const post = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div id="templateProjetos">
        <h2>Projetos</h2>
        <div id="cardProjeto">
          <ul>
            {post.map((projeto, i) => {
              return (
                <CardProjeto
                  key={projeto.node.id}
                  titulo={projeto.node.frontmatter.title}
                  atividades={projeto.node.frontmatter.atividades}
                  url={projeto.node.frontmatter.url}
                  imagem={projeto.node.frontmatter.image.childImageSharp.fixed}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { tipo: { eq: "projeto" } } }) {
      edges {
        node {
          frontmatter {
            title
            url
            atividades
            image {
              childImageSharp {
                fixed(width: 336) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
//import TitlePage from "../../components/TitlePage/titlePage"
import CardTecnologia from "../../components/CardTecnologia/cardTecnologia"

export default ({ data }) => {
  const post = data.allMarkdownRemark

  return (
    <Layout>
      <h2>Tecnologias</h2>
      {post.edges.map((techs, i) => {
        return (
          <CardTecnologia
            key={techs.node.id}
            titulo={techs.node.frontmatter.title}
            descricao={techs.node.frontmatter.descricao}
          />
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { tipo: { eq: "tecnologia" } } }) {
      edges {
        node {
          frontmatter {
            title
            descricao
          }
        }
      }
    }
  }
`

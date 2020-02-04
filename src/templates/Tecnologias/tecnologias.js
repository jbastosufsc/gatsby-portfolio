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
      {post.edges.map((tecnologia, i) => {
        return (
          <CardTecnologia
            key={tecnologia.node.id}
            titulo={tecnologia.node.frontmatter.title}
            descricao={tecnologia.node.frontmatter.descricao}
            img={tecnologia.node.frontmatter.img.childImageSharp.fixed}
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
            img {
              childImageSharp {
                fixed(width: 56) {
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

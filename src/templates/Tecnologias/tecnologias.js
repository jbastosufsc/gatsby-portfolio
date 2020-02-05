import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
//import TitlePage from "../../components/TitlePage/titlePage"
import CardTecnologia from "../../components/CardTecnologia/cardTecnologia"
import "./tecnologias.css"

export default ({ data }) => {
  const post = data.allMarkdownRemark
  return (
    <Layout>
      <div id="templateTecnologias">
        <h2>Tecnologias</h2>
        <div id="cardsTecnologias">
          {post.edges.map((tecnologia, i) => {
            return (
              <CardTecnologia
                key={tecnologia.node.id}
                titulo={tecnologia.node.frontmatter.title}
                descricao={tecnologia.node.frontmatter.descricao}
                image={tecnologia.node.frontmatter.image.childImageSharp.fixed}
                body={tecnologia.node.excerpt}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { tipo: { eq: "tecnologia" } } }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            descricao
            image {
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

import React from "react"
import Layout from "../../components/layout"
import Img from "gatsby-image"

import "./projetos.css"

export default ({ data }) => {
  const post = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div id="templateProjetos">
        <h2>Projetos</h2>
        <div id="cardsProjeto">
          {post.map((projetos, i) => {
            return (
              <li>
                <div>{projetos.node.frontmatter.title}</div>
                <div>{projetos.node.frontmatter.atividades}</div>
                <div>{projetos.node.frontmatter.url}</div>
              </li>
            )
          })}
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

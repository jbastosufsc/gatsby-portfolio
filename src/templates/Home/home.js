import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import TitlePage from "../../components/TitlePage/titlePage"

import "./home.css"

export default ({ data }) => {
  const post = data.markdownRemark
  const { html } = post

  return (
    <Layout>
      <TitlePage siteTitle={post.frontmatter.title}></TitlePage>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

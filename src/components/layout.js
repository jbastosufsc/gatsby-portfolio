/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { SocialProfileJsonLd } from "gatsby-plugin-next-seo"


import Header from "./Header/header"
import "./layout.css"

import "minireset.css"

const Layout = ({ children }) => {
  const dataNavMenu = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <SocialProfileJsonLd
        type="Person"
        name="$SiteName "
        url="$siteurl"
        sameAs={[
          "https://www.facebook.com/jbastos10/",
          "https://instagram.com/jorgebastos10/",
          "https://www.linkedin.com/in/jorgebastosjr/",
        ]}
      />
      <Header
        menuLinks={dataNavMenu.site.siteMetadata.menuLinks}
        siteTitle={dataNavMenu.site.siteMetadata.title}
      />

      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Desenvolvido em Gatsby por
          {` `}
          <a href="https://github.com/jbastosufsc/">jbastosufsc</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

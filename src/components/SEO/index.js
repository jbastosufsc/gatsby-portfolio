import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = () => {
  const data = useStaticQuery(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteURL
            social {
              github
              linkedin
              instagram
            }
          }
        }
      }
    `
  )

  const company = data.site.siteMetadata
  const seo = {
    title: company.title || company.defaultTitle,
    description: company.description || company.defaultDescription,
    image: `${company.siteUrl}${company.image || company.defaultImage}`,
    url: `${company.siteUrl}${company.pathname || '/'}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={company.titleTemplate}>
      <meta name="google-site-verification" content={company.searchConsole} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta charSet="utf-8" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:type" content="website" />

      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {seo.image && <meta property="og:image:url" content={seo.image} />}

      {seo.image && <meta property="og:image:type" content="image/png" />}
      <meta name="twitter:card" content="summary_large_image" />
      {company.social.twitter && <meta name="twitter:creator" content={company.social.twitter} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO

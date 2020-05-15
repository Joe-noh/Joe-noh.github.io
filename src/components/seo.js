import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import favicon from "../images/favicon.png"

function SEO({ title, description, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const titleTemplate = `%s | ${site.siteMetadata.title}`
  const metaDescription = description || site.siteMetadata.description
  const metaInfo = [
    { name: "description", content: metaDescription },
    { property: "og:title", content: title },
    { property: "og:description", content: metaDescription },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:creator", content: site.siteMetadata.author },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: metaDescription },
  ].concat(meta)

  return (
    <Helmet
      htmlAttributes={{ lang: "ja" }}
      title={title}
      titleTemplate={titleTemplate}
      meta={metaInfo}
    >
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
  )
}

SEO.defaultProps = {
  description: "",
  meta: [],
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./Layout.css"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author {
            name
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={site.siteMetadata?.title || `richen.dev`} />
      <main>{children}</main>
      <footer
        id="footer"
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()} {site.siteMetadata?.author.name}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

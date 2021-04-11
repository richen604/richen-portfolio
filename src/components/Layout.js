/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./Nav"
//import "./LayoutDefault.css"
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
    <div id="layout-container">
      <div id="layout-nav">
        <Nav siteTitle={site.siteMetadata?.title || `richen.dev`} />
      </div>
      <main id="layout-children-container">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

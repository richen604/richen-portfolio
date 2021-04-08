import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Navbar, NavbarBrand, Nav as NavBookStrap } from "reactstrap"

import "./Nav.css"

const Nav = ({ siteTitle }) => {
  const { site } = useStaticQuery(graphql`
    query {
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
    <Navbar id="nav-container">
      <NavbarBrand id="nav-brand">
        <Link className="nav-link" to="/">
          {siteTitle}
        </Link>
      </NavbarBrand>
      <img
        id="nav-portrait"
        src={`display-portrait.png`}
        alt="Richard Henninger Portrait Image"
      />
      <NavBookStrap id="nav-link-container"></NavBookStrap>
      <footer
        id="nav-footer"
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()} {site.siteMetadata?.author.name}
      </footer>
    </Navbar>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav

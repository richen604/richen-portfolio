import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Navbar,
  NavbarBrand,
  Nav as NavBookStrap,
  NavbarText,
  Collapse,
  Button,
} from "reactstrap"

import "./Nav.css"

const NavContent = ({ site }) => (
  <>
    <div id="nav-profile-container">
      <Link to="/">
        <img
          id="nav-portrait"
          src={`display-portrait.png`}
          alt="Richard Henninger Portrait Image"
        />
      </Link>

      <p id="nav-intro-text">Full Stack JavaScript Developer</p>
      <p id="nav-intro-subtext">
        Take a look at{" "}
        <Link className="nav-text-link" to="/contact">
          my work
        </Link>{" "}
        or feel free to{" "}
        <Link className="nav-text-link" to="/contact">
          contact me
        </Link>{" "}
        for a <strong className="nav-strongtext">free quote</strong>!
      </p>
      <div className="nav-divider" />
    </div>

    <NavBookStrap id="nav-link-container">
      <Link className="nav-link-container-link" to="/">
        About Me
      </Link>
      <Link className="nav-link-container-link" to="/portfolio">
        Portfolio
      </Link>
      <Link className="nav-link-container-link" to="/resume">
        Resume
      </Link>
      <Link className="nav-link-container-link" to="/contact">
        Contact
      </Link>
      <Button id="nav-hireme">
        <Link id="nav-hireme-link" to="/contact">
          Hire Me!
        </Link>
      </Button>
    </NavBookStrap>

    <div className="nav-divider" />
    <footer id="nav-footer">
      © {new Date().getFullYear()} {site.siteMetadata?.author.name}
    </footer>
  </>
)

NavContent.propTypes = {
  site: PropTypes.object,
}

const Nav = () => {
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

  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Navbar id="nav-container">
      <div>
        <Button id="nav-toggle" onClick={toggleNavbar} />
        <NavbarText id="nav-bar-name">Richard Henninger</NavbarText>
      </div>
      <NavbarBrand id="nav-brand">
        <Link className="nav-link" to="/">
          {site.siteMetadata.title}
        </Link>
      </NavbarBrand>
      <Collapse id="nav-bar-container" isOpen={!collapsed} navbar>
        <NavContent site={site} />
      </Collapse>
      <div id="nav-content-container">
        <NavContent site={site} />
      </div>
    </Navbar>
  )
}

export default Nav

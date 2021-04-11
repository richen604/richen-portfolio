import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Navbar,
  Nav as NavBookStrap,
  NavbarText,
  Collapse,
  Button,
} from "reactstrap"

import "./Nav.css"
import Socials from "./Socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileAlt,
  faLaptopCode,
  faPaperPlane,
  faUser,
  faEnvelopeOpenText,
  faBars,
} from "@fortawesome/free-solid-svg-icons"

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
      <Socials colorProp="lightBorder" />
      <div className="nav-divider" />
    </div>
    <NavBookStrap id="nav-link-container">
      <Link className="nav-link-container-link" to="/">
        <FontAwesomeIcon id="user" className="nav-icon" icon={faUser} /> About
        Me
      </Link>
      <Link className="nav-link-container-link" to="/portfolio">
        <FontAwesomeIcon id="laptop" className="nav-icon" icon={faLaptopCode} />{" "}
        Portfolio
      </Link>
      <Link className="nav-link-container-link" to="/resume">
        <FontAwesomeIcon id="file" className="nav-icon" icon={faFileAlt} />{" "}
        Resume
      </Link>
      <Link className="nav-link-container-link" to="/contact">
        <FontAwesomeIcon
          id="envelope"
          className="nav-icon"
          icon={faEnvelopeOpenText}
        />{" "}
        Contact
      </Link>
    </NavBookStrap>
    <Button id="nav-hireme">
      <Link id="nav-hireme-link" to="/contact">
        <FontAwesomeIcon id="plane" className="nav-icon" icon={faPaperPlane} />{" "}
        Hire Me!
      </Link>
    </Button>

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
        <Button
          id="nav-toggle"
          className="nav-collapse-button"
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <NavbarText id="nav-bar-name">Richard Henninger</NavbarText>
      </div>
      <Link id="nav-bar-brand" className="nav-link-bar-link" to="/">
        {site.siteMetadata.title}
      </Link>
      <Collapse id="nav-bar-container" isOpen={!collapsed} navbar>
        <NavContent site={site} />
      </Collapse>
      <div id="nav-content-container">
        <Link id="nav-brand" className="nav-link-nav-link" to="/">
          {site.siteMetadata.title}
        </Link>
        <NavContent site={site} />
      </div>
    </Navbar>
  )
}

export default Nav

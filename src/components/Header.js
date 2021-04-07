import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, NavbarBrand, Nav } from "reactstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar>
      <div id="header-container-left">
        <NavbarBrand>
          <Link to="/">{siteTitle}</Link>
        </NavbarBrand>
      </div>
      <div id="header-left-container">
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/page-2">Page 2</Link>
        </Nav>
      </div>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

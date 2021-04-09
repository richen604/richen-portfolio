import React from "react"
import PropTypes from "prop-types"
import "./PageHeader.css"

function PageHeader({ children }) {
  return <div id="pageHeader-container">{children}</div>
}

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageHeader

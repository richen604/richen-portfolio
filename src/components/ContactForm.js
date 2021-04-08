import React from "react"
import PropTypes from "prop-types"

function ContactForm({ inline }) {
  if (inline) return <div>This is inline</div>
  return <div>This is not inline</div>
}

ContactForm.propTypes = {
  inline: PropTypes.bool,
}

export default ContactForm

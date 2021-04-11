import React from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import "./Socials.css"

function Socials({ colorProp }) {
  const {
    site: {
      siteMetadata: { socials },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            twitter
            linkedin
            github
            stackoverflow
            medium
            codepen
            instagram
          }
        }
      }
    }
  `)

  let color
  if (!colorProp) color = "dark"
  color = colorProp

  return (
    <div className="socials-container">
      <OutboundLink href={socials.github}>
        <div className={`socials-border socials-border-${color}`}>
          <FontAwesomeIcon
            className={`socials-icon socials-icon-${color}`}
            icon={faGithub}
          />
        </div>
      </OutboundLink>
      <OutboundLink href={socials.linkedin}>
        <div className={`socials-border socials-border-${color}`}>
          <FontAwesomeIcon
            className={`socials-icon socials-icon-${color}`}
            icon={faLinkedin}
          />
        </div>
      </OutboundLink>
      <OutboundLink href={socials.medium}>
        <div className={`socials-border socials-border-${color}`}>
          <FontAwesomeIcon
            className={`socials-icon socials-icon-${color}`}
            icon={faMediumM}
          />
        </div>
      </OutboundLink>
      <OutboundLink href={socials.stackoverflow}>
        <div className={`socials-border socials-border-${color}`}>
          <FontAwesomeIcon
            className={`socials-icon socials-icon-${color}`}
            icon={faStackOverflow}
          />
        </div>
      </OutboundLink>
      <OutboundLink href={socials.codepen}>
        <div className={`socials-border socials-border-${color}`}>
          <FontAwesomeIcon
            className={`socials-icon socials-icon-${color}`}
            icon={faCodepen}
          />
        </div>
      </OutboundLink>
      <OutboundLink href={socials.twitter}>
        <div className={`socials-border socials-border-${color}`}>
          <FontAwesomeIcon
            className={`socials-icon socials-icon-${color}`}
            icon={faTwitter}
          />
        </div>
      </OutboundLink>
      <OutboundLink href={socials.instagram}>
        <div className={`socials-border socials-border-${color}`}>
          <FontAwesomeIcon
            className={`socials-icon socials-icon-${color}`}
            icon={faInstagram}
          />
        </div>
      </OutboundLink>
    </div>
  )
}

Socials.propTypes = {
  colorProp: PropTypes.string,
}

export default Socials

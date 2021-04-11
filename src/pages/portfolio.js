import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageHeader from "../components/PageHeader"
import ProjectCardGroup from "../components/ProjectCardGroup"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./portfolio.css"

function Portfolio() {
  const {
    site: {
      siteMetadata: { socials },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            github
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <PageHeader>
        <div id="portfolio-intro-container">
          <h2 id="portfolio-intro-header">Portfolio</h2>
          <p id="portfolio-intro-text">
            Welcome to my portfolio. All of these projects can be seen on my
            github{" "}
            <OutboundLink className="index-text-link" href={socials.github}>
              here
            </OutboundLink>
            .<br />
            If you want and application or website similar to what you see, feel
            free to contact me{" "}
            <Link className="index-text-link" to="/contact">
              here
            </Link>
            .
          </p>
        </div>
      </PageHeader>
      <ProjectCardGroup />
    </Layout>
  )
}

export default Portfolio

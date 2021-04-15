import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageHeader from "../components/PageHeader"
import { Button } from "reactstrap"
import "./resume.css"

function Resume() {
  return (
    <Layout>
      <SEO title="Resume" />
      <PageHeader>
        <div id="resume-header-intro">
          <h2 id="resume-header-title">Resume</h2>
          <Button
            className="index-intro-button-primary"
            href={`Richard Henninger Resume.pdf`}
          >
            Download PDF Version
          </Button>
        </div>
      </PageHeader>
      <div id="resume-content-wrapper">
        <img
          id="resume-img"
          src={`Richard Henninger Resume.svg`}
          alt="Richard Henninger Resume SVG"
        />
      </div>
    </Layout>
  )
}

export default Resume

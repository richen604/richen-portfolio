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
          <h2>Resume</h2>
          <p>
            sifdjsdoijfds fsdf dsi fjsdf dsfoiusj sidfjoids jfdsfdsf sdiufd fds
            fsd fsdsfdsfds
          </p>
          <Button href={`Richard Henninger Resume.pdf`}>
            Download PDF Version
          </Button>
        </div>
      </PageHeader>
      <div>This is where i will put my resume</div>
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

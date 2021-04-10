import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageHeader from "../components/PageHeader"
//import { Link } from "gatsby"
import ProjectCardGroup from "../components/ProjectCardGroup"

function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <PageHeader>
        <div id="portfolio-intro-container">
          <h2>Portfolio</h2>
          <p>
            adsajfdjsfdsfjdsifdsjsads flkdjdsljf dflk dsjlk jfjdslk jlksafkjd
            klflkdsjfslkdfdskljfj akjfddfdsjkfdkfds.
          </p>
        </div>
      </PageHeader>
      <ProjectCardGroup />
    </Layout>
  )
}

export default Portfolio

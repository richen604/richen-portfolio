import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageHeader from "../components/PageHeader"
import { Link } from "gatsby"
import { Button } from "reactstrap"
import "./About.css"
import SkillsGroup from "../components/SkillsGroup"
import ProjectCarousel from "../components/ProjectCarousel"

const AboutHeaderContent = () => (
  <>
    <div id="about-pageHeader-intro">
      <h2 id="about-pageHeader-intro-h2">Richard Henninger</h2>
      <h5 id="about-pageHeader-intro-h5">Full Stack JavaScript Developer</h5>
      <p id="about-pageHeader-intro-body">
        Proident veniam et dolor nostrud. Ipsum cillum sunt elit Lorem elit est
        nisi ea. Eu est qui non tempor commodo cillum in eiusmod minim.
      </p>
      <Button>
        <Link>View Portfolio</Link>
      </Button>
      <Button>
        <Link>View Resume</Link>
      </Button>
    </div>
    <div id="about-pageHeader-img-container"></div>
  </>
)

const AboutContent = () => (
  <>
    <div id="about-content-text">
      <h2>What I Do</h2>
      <p>
        Velit nulla culpa qui consequat elit ex in cillum. Ut magna ea deserunt
        excepteur labore incididunt. Quis occaecat cupidatat sit sit sit cillum
        amet. Check out my{" "}
        <Link className="layout-text-link" to="/resume">
          online resume
        </Link>{" "}
        and{" "}
        <Link className="layout-text-link" to="/portfolio">
          projects
        </Link>
        .
      </p>
    </div>
    <SkillsGroup />
  </>
)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div id="about-container">
        <PageHeader>
          <AboutHeaderContent />
        </PageHeader>
        <AboutContent id="about-content" />
        <ProjectCarousel />
      </div>
      <div id="about-footer">
        Icons provided by{" "}
        <a className="nav-text-link" href="icons8.com">
          icons8.com
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage

import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageHeader from "../components/PageHeader"
import { Link } from "gatsby"
import { Button } from "reactstrap"
import "./index.css"
import SkillsGroup from "../components/SkillsGroup"
import ProjectCarousel from "../components/ProjectCarousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowCircleRight,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons"

const AboutHeaderContent = () => (
  <>
    <div id="about-pageHeader-intro">
      <div id="about-pageHeader-intro-h1">Richard Henninger</div>
      <div id="about-pageHeader-intro-h5">Full Stack JavaScript Developer</div>
      <p id="about-pageHeader-intro-body">
        I&apos;m a software engineer specialized in frontend and backend
        development for complex scalable web apps. Check out my project
        portfolio and online resume.
      </p>
      <Link to="/portfolio" className="index-intro-button-link">
        <Button className="index-intro-button-primary">
          <FontAwesomeIcon
            className="index-intro-button-icon"
            icon={faArrowCircleRight}
          />
          View Portfolio
        </Button>
      </Link>
      <Link to="/resume" className="index-intro-button-link">
        <Button className="index-intro-button-secondary">
          <FontAwesomeIcon
            className="index-intro-button-icon"
            icon={faFileAlt}
          />
          View Resume
        </Button>
      </Link>
    </div>
    <div id="about-pageHeader-img-container"></div>
  </>
)

const AboutContent = () => (
  <>
    <div id="about-content-text">
      <h2 id="about-content-text-title">What I Do</h2>
      <p id="about-content-text-text">
        Below is a quick overview of my main technical skill sets and
        technologies I use. Want to find out more about my experience? Check out
        my online resume and project portfolio.{" "}
        <Link className="index-text-link" to="/resume">
          online resume
        </Link>{" "}
        and{" "}
        <Link className="index-text-link" to="/portfolio">
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
      <SEO title="About Me" />
      <div id="about-container">
        <PageHeader>
          <AboutHeaderContent />
        </PageHeader>
        <AboutContent id="about-content" />
        <h2 id="about-featured-title">Featured Projects</h2>
        <div id="index-carousel-wrapper">
          <ProjectCarousel />
        </div>
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

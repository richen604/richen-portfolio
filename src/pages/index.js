import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import ProjectCardGroup from "../components/ProjectCardGroup"
//import ProjectCarousel from "../components/ProjectCarousel"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="richen.dev" />
      <ProjectCardGroup />
    </Layout>
  )
}

export default IndexPage

import React from "react"
import { UncontrolledCarousel } from "reactstrap"

const items = [
  {
    src: `bloglist-mockup.png`,
    altText: "BlogList App Mockup",
    caption: "Slide 1",
    header: "BlogList",
    key: "1",
  },
  {
    src: `raterepo-mockup.png`,
    altText: "RateRepo App Mockup",
    caption: "Slide 2",
    header: "RateRepo",
    key: "2",
  },
  {
    src: `library-mockup.png`,
    altText: "Library App Mockup",
    caption: "Slide 3",
    header: "Library",
    key: "3",
  },
]

const ProjectCarousel = () => <UncontrolledCarousel items={items} />

export default ProjectCarousel

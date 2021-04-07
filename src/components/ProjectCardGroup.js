import React from "react"
import {
  Card,
  Button,
  CardTitle,
  CardImg,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap"

const ProjectCardGroup = () => {
  const projectCardData = [
    {
      title: "BlogList",
      src: `bloglist-mockup.png`,
      alt: "BlogList App Mockup",
      text:
        "List your favourite blogs! Authenticated and secure, this application was built using NodeJS, ReactJS, MongoDB, ReduxJS, and ExpressJS. It shows knowledge of User Authentication, Routing, Unit testing, End to End Testing, State Management and Production Pipelines",
      live: "https://richen-bloglist.herokuapp.com/",
      github: "https://github.com/richen604/richen-bloglist",
    },
    {
      title: "Library",
      src: `library-mockup.png`,
      alt: "Library App Mockup",
      text: "",
      live: "",
      github: "https://github.com/richen604/richen-library",
    },
    {
      title: "RateRepo",
      src: `raterepo-mockup.png`,
      alt: "RateRepo App Mockup",
      text: "",
      live: "",
      github: "https://github.com/richen604/richen-raterepo-app",
    },
    {
      title: "Patientor",
      src: `patientor-mockup.png`,
      alt: "Patientor App Mockup",
      text:
        "Work in healthcare? Organize your patients and list diagnosis with this web app! This application was built using NodeJS, ReactJS, Typescript, and ExpressJS. It shows knowledge of Typescript features such as Types, Enums, and Interfaces. This application also outlines Form Validation, Proofing Express Requests, State Management and CI/CD Pipelines.",
      live: "https://richen-patientor.herokuapp.com/",
      github: "https://github.com/richen604/richen-patientor",
    },
    {
      title: "Anecdotes",
      src: `anecdotes-mockup.png`,
      alt: "Anecdotes App Mockup",
      text:
        "List your favourite anecdotes in this single-page app! This application was built using NodeJS, ReactJS, MongoDB, ReduxJS, ExpressJS, and many more packages! It shows knowledge of Flux-Architecture, managing States with Reducers, Redux Devtools, Asynchronous Action Creators, and Production Pipelines",
      live: "",
      github: "https://github.com/richen604/richen-anecdotes",
    },

    {
      title: "PhoneBook",
      src: `phonebook-mockup.png`,
      alt: "PhoneBook App Mockup",
      text:
        "Manage your own phone numbers and more with richen-phonebook! This application was built using NodeJS, ReactJS, MongoDB, ExpressJS, and many more packages! ",
      live: "https://richen-phonebook.herokuapp.com/",
      github: "https://github.com/richen604/richen-phonebook",
    },
    {
      title: "Eskobot",
      src: "",
      alt: "Eskobot App Mockup",
      text:
        "A discord bot for use with moderation, logging, games, and much more! Built to support multiple servers, local development, and production deployment. This application outlines the knowledge of building an application based on user feedback. Technologies used are NodeJS, Event Listeners, Refactoring, Sequelize, ES6 Array Methods",
      live: "",
      github: "https://github.com/richen604/Eskobot",
    },
    {
      title: "richen.dev",
      src: "",
      alt: "richen.dev Mockup",
      text: "",
      live: "/",
      github: "https://github.com/richen604/richen-portfolio",
    },
  ]

  return (
    <CardGroup>
      {projectCardData.map(project => (
        <Card key={project.title}>
          <CardImg src={project?.src} alt={project?.alt} />

          <CardBody>
            <CardTitle tag="h5">{project?.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>{project?.text}</CardText>
            <Button href={project?.live}>Live</Button>
            <Button href={project.github}>Github</Button>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  )
}

export default ProjectCardGroup

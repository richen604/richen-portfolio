import React from "react"
import { Card, CardTitle, CardImg, CardText } from "reactstrap"
import { Link } from "gatsby"
import "./SkillsGroup.css"

const SkillsGroup = () => {
  const skillsCardData = [
    {
      title: "Backend Development",
      icons: [
        { src: `icons8-nodejs.svg`, alt: "NodeJS Icon" },
        { src: `icons8-mongodb.svg`, alt: "MongoDB Icon" },
        { src: `icons8-graphql.svg`, alt: "GraphQL Icon" },
        { src: `icons8-typescript.svg`, alt: "TypeScript Icon" },
      ],
      text:
        "Building efficient, scalable, and tested backend applications and API's using popular frameworks such as NodeJS, MongoDB, GraphQL, and TypeScript.",
    },
    {
      title: "Frontend Development",
      icons: [
        { src: "icons8-react.svg", alt: "ReactJS Icon" },
        { src: "icons8-redux.svg", alt: "ReduxJS Icon" },
        { src: "icons8-apollo.svg", alt: "ApolloJS Icon" },
      ],
      text:
        "Building clear and tested frontend components using ReactJS utilizing state management frameworks and query languages such as ReduxJS and Apollo.",
    },
    {
      title: "Unit & End to End Testing",
      icons: [
        { src: "cypress-logo.svg", alt: "Cypress Logo" },
        { src: "jest-logo.svg", alt: "Jest Logo" },
        { src: "react-testing-library.png", alt: "React Testing Library Logo" },
      ],
      text:
        "Keeping deployments well maintained across all components and functions using testing frameworks such as React Testing Library, Jest, and Cypress.",
    },

    {
      title: "CI / CD and Dev Ops",
      icons: [{ src: "icons8-github.svg", alt: "Github Icon" }],
      text:
        "Building deployment and development pipelines to keep up with the best practices in continuous deployment and continuous integration.",
    },
    {
      title: "Mobile Development",
      icons: [{ src: "icons8-react-native.svg", alt: "React Native Icon" }],
      text:
        "Building full stack mobile applications using React Native to meet all customer expectations of the mobile architecture environment including routing to API's.",
    },
    {
      title: "Version Control & Tooling",
      icons: [
        { src: "icons8-npm.svg", alt: "Npm Icon" },
        { src: "icons8-github.svg", alt: "Github Icon" },
        { src: "icons8-bash.svg", alt: "Bash Icon" },
      ],
      text:
        "Keeping versions and packages consistent and maintained on a variety of applications using tooling like NPM, Git, Github, Bash, and Shell.",
    },
    {
      title: "Frontend Design",
      icons: [
        { src: "icons8-html-5.svg", alt: "Html 5 Icon" },
        { src: "icons8-javascript.svg", alt: "JavaScript Icon" },
        { src: "icons8-css3.svg", alt: "CSS 3 Icon" },
        { src: "icons8-adobe-xd.svg", alt: "Adobe XD Icon" },
      ],
      text:
        "Building mockup designs for applications in Adobe XD and fulfilling them to customer expectations using languages like HTML5, CSS3, and JavaScript.",
    },
  ]

  return (
    <div id="sg-container">
      {skillsCardData.map(skill => (
        <Card className="sg-card" id={`${skill.title}-card`} key={skill.title}>
          <Link to={skill?.live}>
            {skill.icons.map(icon => (
              <CardImg
                key={icon.alt}
                className="sg-img"
                id={`${icon.alt}-icon`}
                src={icon.src}
              />
            ))}
          </Link>
          <CardTitle className="sg-title" id={`${skill.title}-title`}>
            {skill?.title}
          </CardTitle>
          <CardText className="sg-text" id={`${skill.title}-text`}>
            {skill?.text}
          </CardText>
        </Card>
      ))}
    </div>
  )
}

export default SkillsGroup

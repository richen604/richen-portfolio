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
        "Ea occaecat irure tempor qui. Do aliquip ad exercitation tempor amet et excepteur magna magna eiusmod culpa. Aliqua laboris tempor tempor irure deserunt id fugiat est veniam tempor consequat ea adipisicing.",
    },
    {
      title: "Frontend Development",
      icons: [
        { src: "icons8-react.svg", alt: "ReactJS Icon" },
        { src: "icons8-redux.svg", alt: "ReduxJS Icon" },
        { src: "icons8-apollo.svg", alt: "ApolloJS Icon" },
      ],
      text:
        "Ea occaecat irure tempor qui. Do aliquip ad exercitation tempor amet et excepteur magna magna eiusmod culpa. Aliqua laboris tempor tempor irure deserunt id fugiat est veniam tempor consequat ea adipisicing.",
    },
    {
      title: "Unit & End to End Testing",
      icons: [
        { src: "cypress-logo.svg", alt: "Cypress Logo" },
        { src: "jest-logo.svg", alt: "Jest Logo" },
        { src: "react-testing-library.png", alt: "React Testing Library Logo" },
      ],
      text:
        "Ea occaecat irure tempor qui. Do aliquip ad exercitation tempor amet et excepteur magna magna eiusmod culpa. Aliqua laboris tempor tempor irure deserunt id fugiat est veniam tempor consequat ea adipisicing.",
    },

    {
      title: "CI / CD and Dev Ops",
      icons: [{ src: "icons8-github.svg", alt: "Github Icon" }],
      text:
        "Ea occaecat irure tempor qui. Do aliquip ad exercitation tempor amet et excepteur magna magna eiusmod culpa. Aliqua laboris tempor tempor irure deserunt id fugiat est veniam tempor consequat ea adipisicing.",
    },
    {
      title: "Mobile Development",
      icons: [{ src: "icons8-react-native.svg", alt: "React Native Icon" }],
      text:
        "Ea occaecat irure tempor qui. Do aliquip ad exercitation tempor amet et excepteur magna magna eiusmod culpa. Aliqua laboris tempor tempor irure deserunt id fugiat est veniam tempor consequat ea adipisicing.",
    },
    {
      title: "Version Control & Tooling",
      icons: [
        { src: "icons8-npm.svg", alt: "Npm Icon" },
        { src: "icons8-github.svg", alt: "Github Icon" },
        { src: "icons8-bash.svg", alt: "Bash Icon" },
      ],
      text:
        "Ea occaecat irure tempor qui. Do aliquip ad exercitation tempor amet et excepteur magna magna eiusmod culpa. Aliqua laboris tempor tempor irure deserunt id fugiat est veniam tempor consequat ea adipisicing.",
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
        "Ea occaecat irure tempor qui. Do aliquip ad exercitation tempor amet et excepteur magna magna eiusmod culpa. Aliqua laboris tempor tempor irure deserunt id fugiat est veniam tempor consequat ea adipisicing.",
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

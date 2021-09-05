import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import Image from 'next/image';
import { TCard, TCardTitle, TCardBody } from './ThemedComponents';

import node from '../images/icons8-nodejs.svg';
import mongo from '../images/icons8-mongodb.svg';
import graphql from '../images/icons8-graphql.svg';
import typescript from '../images/icons8-typescript.svg';

import react from '../images/icons8-react.svg';
import redux from '../images/icons8-redux.svg';
import apollo from '../images/icons8-apollo.svg';

import cypress from '../images/cypress-logo.svg';
import jest from '../images/jest-logo.svg';
import reacttesting from '../images/react-testing-library.png';

import github from '../images/icons8-github.svg';

import reactnative from '../images/icons8-react-native.svg';

import npm from '../images/icons8-npm.svg';
import bash from '../images/icons8-bash.svg';

import html from '../images/icons8-html-5.svg';
import css from '../images/icons8-css3.svg';
import javascript from '../images/icons8-javascript.svg';
import adobexd from '../images/icons8-adobe-xd.svg';
import FadeOnViewDiv from './FadeInViewDiv';

const skillsCardData = [
  {
    title: 'Backend Development',
    icons: [
      { src: node, alt: 'NodeJS' },
      { src: mongo, alt: 'MongoDB' },
      { src: graphql, alt: 'GraphQL' },
      { src: typescript, alt: 'TypeScript' },
    ],
    text: "Building efficient, scalable, and tested backend applications and API's using popular frameworks such as NodeJS, MongoDB, GraphQL, and TypeScript.",
  },
  {
    title: 'Frontend & Mobile Development',
    icons: [
      { src: react, alt: 'ReactJS' },
      { src: redux, alt: 'ReduxJS' },
      { src: apollo, alt: 'ApolloJS' },
      { src: reactnative, alt: 'React Native' },
    ],
    text: 'Building clear and tested frontend components using ReactJS and React Native utilizing state management frameworks and query languages such as ReduxJS and Apollo.',
  },
  {
    title: 'Unit & End to End Testing',
    icons: [
      { src: cypress, alt: 'Cypress' },
      { src: jest, alt: 'Jest' },
      { src: reacttesting, alt: 'React Testing Library' },
    ],
    text: 'Keeping deployments well maintained across all components and functions using testing frameworks such as React Testing Library, Jest, and Cypress.',
  },

  {
    title: 'CI / CD and Dev Ops',
    icons: [{ src: github, alt: 'Github' }],
    text: 'Building deployment and development pipelines to keep up with the best practices in continuous deployment and continuous integration.',
  },
  {
    title: 'Version Control & Tooling',
    icons: [
      { src: npm, alt: 'Npm Icon' },
      { src: github, alt: 'Github Icon' },
      { src: bash, alt: 'Bash Icon' },
    ],
    text: 'Keeping versions and packages consistent and maintained on a variety of applications using tooling like NPM, Git, Github, Bash, and Shell.',
  },
  {
    title: 'Frontend Design',
    icons: [
      { src: html, alt: 'Html 5 Icon' },
      { src: javascript, alt: 'JavaScript Icon' },
      { src: css, alt: 'CSS 3 Icon' },
      { src: adobexd, alt: 'Adobe XD Icon' },
    ],
    text: 'Building mockup designs for applications in Adobe XD and fulfilling them to customer expectations using languages like HTML5, CSS3, and JavaScript.',
  },
];

const SCardGroup = styled(MDBContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-end;
  margin: 75px 0 100px 0;
  min-width: 100%;
  height: auto;
`;

const SCard = styled(TCard)`
  min-width: 200px;
  max-width: 400px;
  height: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #d63384;
`;

const SCardTitle = styled(TCardTitle)`
  font-family: 'Montserrat Thin', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  line-height: 18px;
  font-weight: 500;
  margin: 8px 0px;
  height: 40px;
  color: #d63384;
`;

const SCardImageContainer = styled(MDBContainer)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  margin-bottom: 2px;
`;

const SCardImage = styled(Image)`
  margin: 5px;
`;

const SCardText = styled(TCardBody)`
  font-family: 'Robotto', sans-serif;
  font-size: clamp(0.9rem, 0.4vw, 1rem);
  line-height: 23px;
  font-weight: 500;
  padding: 0;
  width: 100%;
`;

const SkillsGroup: React.FC = () => (
  <SCardGroup>
    {skillsCardData.map(skill => (
      <FadeOnViewDiv>
        <SCard key={skill.title}>
          <SCardTitle>{skill?.title}</SCardTitle>
          <SCardText>{skill?.text}</SCardText>
          <SCardImageContainer>
            {skill.icons.map(icon => (
              <SCardImage
                key={icon.alt}
                width={30}
                height={30}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </SCardImageContainer>
        </SCard>
      </FadeOnViewDiv>
    ))}
  </SCardGroup>
);

export default SkillsGroup;

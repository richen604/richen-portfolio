import React from 'react';
import { MDBCardImage, MDBContainer } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { TCard, TCardTitle, TCardBody } from './ThemedComponents';
import Image from 'next/image';

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

const skillsCardData = [
  {
    title: 'Backend Development',
    icons: [
      { src: node, alt: 'NodeJS Icon' },
      { src: mongo, alt: 'MongoDB Icon' },
      { src: graphql, alt: 'GraphQL Icon' },
      { src: typescript, alt: 'TypeScript Icon' },
    ],
    text: "Building efficient, scalable, and tested backend applications and API's using popular frameworks such as NodeJS, MongoDB, GraphQL, and TypeScript.",
  },
  {
    title: 'Frontend Development',
    icons: [
      { src: react, alt: 'ReactJS Icon' },
      { src: redux, alt: 'ReduxJS Icon' },
      { src: apollo, alt: 'ApolloJS Icon' },
    ],
    text: 'Building clear and tested frontend components using ReactJS utilizing state management frameworks and query languages such as ReduxJS and Apollo.',
  },
  {
    title: 'Unit & End to End Testing',
    icons: [
      { src: cypress, alt: 'Cypress Logo' },
      { src: jest, alt: 'Jest Logo' },
      { src: reacttesting, alt: 'React Testing Library Logo' },
    ],
    text: 'Keeping deployments well maintained across all components and functions using testing frameworks such as React Testing Library, Jest, and Cypress.',
  },

  {
    title: 'CI / CD and Dev Ops',
    icons: [{ src: github, alt: 'Github Icon' }],
    text: 'Building deployment and development pipelines to keep up with the best practices in continuous deployment and continuous integration.',
  },
  {
    title: 'Mobile Development',
    icons: [{ src: reactnative, alt: 'React Native Icon' }],
    text: "Building full stack mobile applications using React Native to meet all customer expectations of the mobile architecture environment including routing to API's.",
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

interface SkillsGroupProps {}

const SCardGroup = styled(MDBContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  padding: 0 50px;
  margin: 50px;
  min-width: 100%;
  height: auto;
`;

const SCard = styled(TCard)`
  width: 250px;
  height: 250px;
  margin: 10px;
  padding: 20px;
`;

const SCardTitle = styled(TCardTitle)`
  font-family: 'Roboto' sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 700;
  margin: 8px 0px;
`;

const SCardImageContainer = styled(MDBContainer)`
  margin: 0;
  padding: 0;
`;

const SCardText = styled(TCardBody)`
  font-family: 'Roboto' sans-serif;
  font-size: 0.875rem;
  line-height: 21px;
  font-weight: 400;
  padding: 0;
  width: 100%;
`;

const SkillsGroup: React.FC = () => {
  return (
    <SCardGroup>
      {skillsCardData.map((skill) => (
        <SCard key={skill.title}>
          <SCardImageContainer>
            {skill.icons.map((icon) => (
              <Image
                key={icon.alt}
                width={30}
                height={30}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </SCardImageContainer>
          <SCardTitle>{skill?.title}</SCardTitle>
          <SCardText>{skill?.text}</SCardText>
        </SCard>
      ))}
    </SCardGroup>
  );
};

export default SkillsGroup;

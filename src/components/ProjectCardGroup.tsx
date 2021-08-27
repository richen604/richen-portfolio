import React from 'react';
import styled from 'styled-components';
import { MDBContainer } from 'mdb-react-ui-kit';
import Image from 'next/image';
import {
  TCard,
  TCardTitle,
  TButtonPrimary,
  TCardText,
  TCardBody,
  TOutboundLinkText,
} from './ThemedComponents';
import bloglistImage from '../images/bloglist-mockup.png';
import libraryImage from '../images/library-mockup.png';
import raterepoImage from '../images/raterepo-mockup.png';
import patientorImage from '../images/patientor-mockup.png';
import anecdotesImage from '../images/anecdotes-mockup.png';
import phonebookImage from '../images/phonebook-mockup.png';
import eskobotImage from '../images/discord-mockup.svg';
import richendevImage from '../images/richen-image.png';

const projectCardData = [
  {
    title: 'BlogList',
    src: bloglistImage,
    alt: 'BlogList App Mockup',
    text: 'List your favourite blogs! Authenticated and secure, this application was built using NodeJS, ReactJS, MongoDB, ReduxJS, and ExpressJS. It shows knowledge of User Authentication, Routing, Unit testing, End to End Testing, State Management and Production Pipelines',
    live: 'https://richen-bloglist.herokuapp.com/',
    github: 'https://github.com/richen604/richen-bloglist',
  },
  {
    title: 'Library',
    src: libraryImage,
    alt: 'Library App Mockup',
    text: 'List your favourite books! Authenticated and secure, this application was built using NodeJS, ReactJS, MongoDB, Apollo GraphQL, and ExpressJS. It shows knowledge of Apollo GraphQL Queries, Mutations, Subscriptions, Fragments, and Error Handling. This application also outlines User Authentication, State Management, and Production Pipelines.',
    live: 'https://richen-library.herokuapp.com/',
    github: 'https://github.com/richen604/richen-library',
  },
  {
    title: 'RateRepo',
    src: raterepoImage,
    alt: 'RateRepo App Mockup',
    text: 'A mobile application for rating Github repositories built using NodeJS, React Native, GraphQL, Apollo Client, and Expo. This application outlines knowledge of Mobile Development, User Authentication, Unit Testing, Form Validation, State Management, and Infinite Scrolling. ',
    live: null,
    github: 'https://github.com/richen604/richen-raterepo-app',
  },
  {
    title: 'Patientor',
    src: patientorImage,
    alt: 'Patientor App Mockup',
    text: 'Work in healthcare? Organize your patients and list diagnosis with this web app! This application was built using NodeJS, ReactJS, Typescript, and ExpressJS. It shows knowledge of Typescript features such as Types, Enums, and Interfaces. This application also outlines Form Validation, Proofing Express Requests, State Management and CI/CD Pipelines.',
    live: 'https://richen-patientor.herokuapp.com/',
    github: 'https://github.com/richen604/richen-patientor',
  },
  {
    title: 'Anecdotes',
    src: anecdotesImage,
    alt: 'Anecdotes App Mockup',
    text: 'List your favourite anecdotes in this single-page app! This application was built using NodeJS, ReactJS, MongoDB, ReduxJS, ExpressJS, and many more packages! It shows knowledge of Flux-Architecture, managing States with Reducers, Redux Devtools, Asynchronous Action Creators, and Production Pipelines',
    live: 'https://richen-anecdotes.herokuapp.com/',
    github: 'https://github.com/richen604/richen-anecdotes',
  },

  {
    title: 'PhoneBook',
    src: phonebookImage,
    alt: 'PhoneBook App Mockup',
    text: 'Manage your own phone numbers and more with richen-phonebook! This application was built using NodeJS, ReactJS, MongoDB, ExpressJS, and many more packages! ',
    live: 'https://richen-phonebook.herokuapp.com/',
    github: 'https://github.com/richen604/richen-phonebook',
  },
  {
    title: 'Eskobot',
    src: eskobotImage,
    alt: 'Eskobot App Mockup',
    text: 'A discord bot for use with moderation, logging, games, and much more! Built to support multiple servers, local development, and production deployment. This application outlines the knowledge of building an application based on user feedback. Technologies used are NodeJS, Event Listeners, Refactoring, Sequelize, ES6 Array Methods',
    live: null,
    github: 'https://github.com/richen604/Eskobot',
  },
  {
    title: 'richen.dev',
    src: richendevImage,
    alt: 'richen.dev Mockup',
    text: 'My portfolio website built with GatsbyJS, ReactJS, NodeJS, and GraphQL. A static website outlining client and server Form Validation, communicating with Express servers, Sanitization, and Validation.',
    live: '/',
    github: 'https://github.com/richen604/richen-portfolio',
  },
];

const SProjectContainer = styled(MDBContainer)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  max-width: 100%;
`;

const SCard = styled(TCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 15px;
  max-width: 400px;
  min-width: 330px;
  height: auto;
  border: none;
  border-radius: 10px;
  @media only screen and (max-width: 1251px) {
    max-width: 1000px;
  }
`;

const SCardTitleContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0 -20px 0;
`;

const SCardTitle = styled(TCardTitle)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  margin: 0 15px;
`;

const SCardButton = styled(TButtonPrimary)`
  min-height: 30px;
  text-align: center;
  margin: 15px 5px;
  width: 80px;
`;

const SCardBody = styled(TCardBody)`
  padding-top: 0;
`;

const SCardText = styled(TCardText)`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 21px;
  font-weight: 400;
`;

const ProjectCardGroup = () => (
  <SProjectContainer>
    {projectCardData.map(project => (
      <SCard key={project.title}>
        {project.live ? (
          <TOutboundLinkText
            target="_blank"
            eventLabel={`outbound-${project.alt}`}
            to={project.live}
          >
            <Image
              quality={100}
              width={500}
              height={300}
              objectFit="contain"
              src={project?.src}
              alt={project?.alt}
            />
          </TOutboundLinkText>
        ) : (
          <Image
            quality={100}
            objectFit="contain"
            width={500}
            height={300}
            src={project?.src}
            alt={project?.alt}
          />
        )}

        <SCardBody>
          <SCardTitleContainer>
            <SCardTitle>{project?.title}</SCardTitle>
            {project.live ? (
              <>
                <SCardButton href={project?.live}>Live</SCardButton>
              </>
            ) : null}
            <SCardButton href={project.github}>Github</SCardButton>
          </SCardTitleContainer>

          <br />
          <SCardText>{project?.text}</SCardText>
        </SCardBody>
      </SCard>
    ))}
  </SProjectContainer>
);

export default ProjectCardGroup;

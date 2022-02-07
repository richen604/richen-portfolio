import { MDBContainer } from 'mdb-react-ui-kit';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { THEME } from 'theme';
import anecdotesImage from '../images/anecdotes-mockup.svg';
import bloglistImage from '../images/bloglist-mockup.svg';
import eskobotImage from '../images/discord-mockup.svg';
import libraryImage from '../images/library-mockup.svg';
import patientorImage from '../images/patientor-mockup.svg';
import phonebookImage from '../images/phonebook-mockup.svg';
import raterepoImage from '../images/raterepo-mockup.svg';
import richendevImage from '../images/richen-image.png';
import {
  TButtonPrimary,
  TCard,
  TCardBody,
  TCardText,
  TCardTitle,
  TOutboundLinkText,
} from './ThemedComponents';

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
  min-width: 200px;
`;

const SCard = styled(TCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  min-width: 200px;
  margin: 20px 0;
  height: auto;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.palette.common.pageBackground};

  @media only screen and (max-width: 1251px) {
    max-width: 1000px;
  }
`;

const SCardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 25px;
`;

const SCardTitle = styled(TCardTitle)`
  font-family: 'Montserrat Thin', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  line-height: 35px;
  font-weight: 500;
  margin: 15px 0;
  margin-left: 20px;
  height: 40px;
  color: #d63384;
  text-align: left;
  width: max-content;
`;

const SCardTitleDivider = styled.div`
  border-top: 1px solid #d63384;
  margin: 0 10px;
  padding-bottom: 1px;

  @media only screen and (max-width: 1000px) {
    width: 55%;
  }

  @media only screen and (min-width: 1000px) {
    width: 75%;
  }
`;

const SCardButtonGroup = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  margin: 25px 0 0 0;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }

  @media only screen and (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: auto;
  }
`;

const SCardButton = styled(TButtonPrimary)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  margin: 20px;
  border-radius: 15px;
  &:hover {
    border-radius: 0;
    scale: 1.03;
  }
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.white} !important; border-color: ${props.theme.palette.common.white} !important; color: ${props.theme.palette.common.black} !important;`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.darker} !important; color: ${props.theme.palette.common.white} !important;`;
      case THEME.LIGHT:
      default:
        return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.darker} !important; color: ${props.theme.palette.common.white} !important;`;
    }
  }}
  &:hover {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.black} !important; background-color: #b8b8b8 !important; border-color: #b8b8b8 !important;`;
        case THEME.DARK:
          return `background-color: ${props.theme.palette.primary.main} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.primary.darkest} !important;`;
        case THEME.LIGHT:
        default:
          return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.darkest} !important; color: ${props.theme.palette.common.white} !important;`;
      }
    }}
  }
`;

const SCardBody = styled(TCardBody)`
  padding-top: 0;
`;

const SCardText = styled(TCardText)`
  margin: 25px 16px;
  padding-left: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 0.5vw, 2.5rem);
  line-height: 32px;
  font-weight: 400;
  @media only screen and (max-width: 1000px) {
    line-height: 1.5;
    margin: 25px 10px 0px 10px;
  }
`;

const SCardImg = styled.div`
  min-width: 200px;
  max-width: 600px;
  margin: 0;
  padding: 0;
  display: block;
`;

const ProjectCardGroup = () => (
  <SProjectContainer>
    {projectCardData.map(project => (
      <SCard key={project.title}>
        <SCardTitleContainer>
          <SCardTitle>{project?.title}</SCardTitle>
          <SCardTitleDivider />
        </SCardTitleContainer>
        {project.live ? (
          <TOutboundLinkText
            target="_blank"
            eventLabel={`outbound-${project.alt}`}
            to={project.live}
          >
            <SCardImg>
              <Image
                quality={100}
                layout="intrinsic"
                src={project?.src}
                alt={project?.alt}
              />
            </SCardImg>
          </TOutboundLinkText>
        ) : (
          <Image
            quality={100}
            width={800}
            height={350}
            src={project?.src}
            alt={project?.alt}
          />
        )}

        <SCardBody>
          <SCardButtonGroup>
            {project.live ? (
              <>
                <SCardButton href={project?.live}>Live</SCardButton>
              </>
            ) : null}
            <SCardButton href={project.github}>Github</SCardButton>
          </SCardButtonGroup>
          <br />
          <SCardText>{project?.text}</SCardText>
        </SCardBody>
      </SCard>
    ))}
  </SProjectContainer>
);

export default ProjectCardGroup;

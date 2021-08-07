import React from 'react';
import {
  faArrowCircleRight,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { MDBContainer } from 'mdb-react-ui-kit';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import SkillsGroup from '../components/SkillsGroup';
import PageHeader from '../components/PageHeader';
import PageMain from '../components/PageMain';
import {
  TTextPrimary,
  TButtonPrimary,
  TButtonSecondary,
  TLocalLink,
  TButtonLink,
  TOutboundLinkText,
} from '../components/ThemedComponents';

const SAboutHeaderIntro = styled(MDBContainer)`
  background-color: transparent;
  margin: 30px;
  justify-content: left;
  align-items: left;
`;

const SAboutIntroH1 = styled(TTextPrimary)`
  text-align: left;
  margin: 5px 13px;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
`;

const SAboutIntroH5 = styled(TTextPrimary)`
  margin: 5px 15px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  line-height: 36px;
  font-weight: 300;
`;

const SAboutIntroP = styled(TTextPrimary)`
  margin: 15px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const SAboutButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const SAboutContentText = styled(MDBContainer)`
  padding: 50px 90px;
  padding-bottom: 20px;
`;

const SAboutContentTitle = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 700;
`;

const SAboutContentSubtext = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const SAboutFooter = styled.footer`
  margin-top: 50px;
  font-size: smaller;
  text-align: end;
  color: white;
`;

const AboutHeaderContent = () => {
  return (
    <SAboutHeaderIntro>
      <SAboutIntroH1 variant="h1">Richard Henninger</SAboutIntroH1>
      <SAboutIntroH5 variant="h5">
        Full Stack JavaScript Developer
      </SAboutIntroH5>
      <SAboutIntroP variant="p">
        I&apos;m a software engineer specialized in frontend and backend
        development for complex scalable web apps. Check out my project
        portfolio and online resume.
      </SAboutIntroP>
      {/*       <TButtonLink to="/portfolio">
        <TButtonPrimary>
          <SAboutButtonIcon icon={faArrowCircleRight} />
          View Portfolio
        </TButtonPrimary>
      </TButtonLink>
      <TButtonLink to="/resume">
        <TButtonSecondary>
          <SAboutButtonIcon icon={faFileAlt} />
          View Resume
        </TButtonSecondary>
      </TButtonLink> */}
    </SAboutHeaderIntro>
  );
};

const AboutContent = () => {
  return (
    <>
      <SAboutContentText>
        <SAboutContentTitle variant="h2">What I Do</SAboutContentTitle>
        <SAboutContentSubtext variant="p">
          Below is a quick overview of my main technical skill sets and
          technologies I use. Want to find out more about my experience? Check
          out my online resume and project portfolio.{' '}
          <TLocalLink href="/resume">online resume</TLocalLink> and{' '}
          <TLocalLink href="/portfolio">projects</TLocalLink>.
        </SAboutContentSubtext>
      </SAboutContentText>
      <SkillsGroup />
    </>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <PageHeader>
        <AboutHeaderContent />
      </PageHeader>
      <PageMain>
        <AboutContent />
        <SAboutFooter>
          Icons provided by{' '}
          <TOutboundLinkText href="icons8.com">icons8.com</TOutboundLinkText>
        </SAboutFooter>
      </PageMain>
    </Layout>
  );
};

export default IndexPage;

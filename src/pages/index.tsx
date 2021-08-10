import React from 'react';
import {
  faArrowCircleRight,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { MDBContainer } from 'mdb-react-ui-kit';
import SEO from '../components/Seo';
import SkillsGroup from '../components/SkillsGroup';
import PageHeader from '../components/Page/PageHeader';
import { PageMain } from '../components/Page';
import {
  TTextPrimary,
  TButtonPrimary,
  TButtonSecondary,
  TButtonLink,
  TOutboundLinkText,
  TNextLinkWrapper,
  TLink,
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
  display: flex;
  margin-top: 50px;
  justify-content: end;
  width: 100%;
  font-size: smaller;
  color: white;
`;

const SAboutFooterText = styled(TTextPrimary)`
  margin-right: 8px;
`;

const SAboutHeaderBtnPrimary = styled(TButtonPrimary)`
  width: 144.8px;
  height: 35px;
`;

const SAboutHeaderBtnSecondary = styled(TButtonSecondary)`
  width: 144.8px;
  height: 35px;
`;

const AboutHeaderContent = () => (
  <SAboutHeaderIntro>
    <SAboutIntroH1 variant="h1">Richard Henninger</SAboutIntroH1>
    <SAboutIntroH5 variant="h5">Full Stack JavaScript Developer</SAboutIntroH5>
    <SAboutIntroP variant="p">
      I&apos;m a software engineer specialized in frontend and backend
      development for complex scalable web apps. Check out my project portfolio
      and online resume for more!
    </SAboutIntroP>
    <TNextLinkWrapper href="/portfolio" Component={TButtonLink}>
      <SAboutHeaderBtnPrimary>
        <SAboutButtonIcon icon={faArrowCircleRight} />
        View Portfolio
      </SAboutHeaderBtnPrimary>
    </TNextLinkWrapper>
    <TNextLinkWrapper href="/resume" Component={TButtonLink}>
      <SAboutHeaderBtnSecondary>
        <SAboutButtonIcon icon={faFileAlt} />
        View Resume
      </SAboutHeaderBtnSecondary>
    </TNextLinkWrapper>
  </SAboutHeaderIntro>
);

const AboutContent = () => (
  <>
    <SAboutContentText>
      <SAboutContentTitle variant="h2">What I Do</SAboutContentTitle>
      <SAboutContentSubtext variant="p">
        Below is a quick overview of my main technical skill sets and
        technologies I use. Want to find out more about my experience? Check out
        my{' '}
        <TNextLinkWrapper href="/resume" Component={TLink}>
          online resume{' '}
        </TNextLinkWrapper>
        and{' '}
        <TNextLinkWrapper href="/portfolio" Component={TLink}>
          projects
        </TNextLinkWrapper>
        .
      </SAboutContentSubtext>
    </SAboutContentText>
    <SkillsGroup />
  </>
);

const IndexPage = () => (
  <>
    <SEO title="About Me" />
    <PageHeader>
      <AboutHeaderContent />
    </PageHeader>
    <PageMain>
      <AboutContent />
      <SAboutFooter>
        <SAboutFooterText>Icons provided by </SAboutFooterText>
        <TOutboundLinkText
          eventLabel="outbound-icons8"
          to="https://icons8.com/"
        >
          icons8.com
        </TOutboundLinkText>
      </SAboutFooter>
    </PageMain>
  </>
);

export default IndexPage;

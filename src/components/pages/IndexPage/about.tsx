import React from 'react';
import {
  faArrowCircleRight,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

import SEO from 'components/Seo';
import SkillsGroup from 'components/SkillsGroup';
import PageHeader from 'components/pages/PageHeader';
import { PageMain } from 'components/pages';
import {
  TButtonLink,
  TOutboundLinkText,
  TNextLinkWrapper,
  TLink,
} from 'components/ThemedComponents';
import {
  SAboutHeaderIntro,
  SAboutIntroH1,
  SAboutIntroH5,
  SAboutIntroP,
  SAboutHeaderBtnPrimary,
  SAboutButtonIcon,
  SAboutHeaderBtnSecondary,
  SAboutContentText,
  SAboutContentTitle,
  SAboutContentSubtext,
  SAboutFooter,
  SAboutFooterText,
} from './styles';

const AboutHeaderContent = () => (
  <SAboutHeaderIntro id="/">
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

const About = () => (
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

export default About;

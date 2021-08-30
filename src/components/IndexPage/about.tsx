import React from 'react';

import SEO from 'components/Seo';
import SkillsGroup from 'components/SkillsGroup';
import PageHeader from 'components/pages/PageHeader';
import { PageMain } from 'components/pages';
import {
  TButtonLink,
  TNextLinkWrapper,
  TLink,
} from 'components/ThemedComponents';
import FadeInWhenVisable from 'components/FadeInWhenVisable';
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
  SAboutButtonGroup,
} from './styles';

const AboutHeaderContent = () => (
  <SAboutHeaderIntro id="#">
    <SAboutIntroH1 variant="h1">Richard Henninger</SAboutIntroH1>
    <SAboutIntroH5 variant="h5">Full Stack JavaScript Developer</SAboutIntroH5>
    <SAboutIntroP variant="p">
      I&apos;m a software engineer specialized in frontend and backend
      development for complex scalable web apps. Check out my project portfolio
      and online resume for more!
    </SAboutIntroP>
    <SAboutButtonGroup>
      <TNextLinkWrapper href="#portfolio" Component={TButtonLink}>
        <SAboutHeaderBtnPrimary>
          <SAboutButtonIcon fas icon="angle-double-right" size="lg" />
          View Portfolio
        </SAboutHeaderBtnPrimary>
      </TNextLinkWrapper>
      <TNextLinkWrapper href="#resume" Component={TButtonLink}>
        <SAboutHeaderBtnSecondary>
          <SAboutButtonIcon far icon="file-alt" size="lg" />
          View Resume
        </SAboutHeaderBtnSecondary>
      </TNextLinkWrapper>
    </SAboutButtonGroup>
  </SAboutHeaderIntro>
);

const AboutContent = () => (
  <>
    <FadeInWhenVisable>
      <SAboutContentText>
        <SAboutContentTitle variant="h2">What I Do</SAboutContentTitle>
        <SAboutContentSubtext variant="p">
          Below is a quick overview of my main technical skill sets and
          technologies I use. Want to find out more about my experience? Check
          out my{' '}
          <TNextLinkWrapper href="#resume" Component={TLink}>
            online resume{' '}
          </TNextLinkWrapper>
          and{' '}
          <TNextLinkWrapper href="#portfolio" Component={TLink}>
            projects
          </TNextLinkWrapper>
          .
        </SAboutContentSubtext>
      </SAboutContentText>
    </FadeInWhenVisable>
    <FadeInWhenVisable>
      <SkillsGroup />
    </FadeInWhenVisable>
  </>
);

const About = () => (
  <>
    <SEO title="About Me" />
    <PageHeader>
      <FadeInWhenVisable>
        <AboutHeaderContent />
      </FadeInWhenVisable>
    </PageHeader>
    <PageMain>
      <AboutContent />
    </PageMain>
  </>
);

export default About;

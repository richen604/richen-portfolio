import React from 'react';

import SEO from 'components/Seo';
import SkillsGroup from 'components/SkillsGroup';
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
  SAboutButtonText,
} from './styles';

const AboutHeaderContent = () => (
  <FadeInWhenVisable>
    <SAboutHeaderIntro id="#">
      <SAboutIntroH1 variant="h1">Richard Henninger</SAboutIntroH1>
      <SAboutIntroH5 variant="h5">
        Full Stack JavaScript Developer
      </SAboutIntroH5>
      <SAboutIntroP variant="p">
        I&apos;m a software engineer specialized in frontend and backend
        development for complex scalable web apps. Check out my project
        portfolio and online resume for more!
      </SAboutIntroP>
      <SAboutButtonGroup>
        <TNextLinkWrapper href="#portfolio" Component={TButtonLink}>
          <SAboutHeaderBtnPrimary size="lg">
            <SAboutButtonIcon fas icon="angle-double-right" size="lg" />
            View Portfolio
          </SAboutHeaderBtnPrimary>
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#contact" Component={TButtonLink}>
          <SAboutHeaderBtnSecondary size="lg">
            <SAboutButtonText>
              <SAboutButtonIcon far icon="paper-plane" size="lg" />
              Hire Me
            </SAboutButtonText>
          </SAboutHeaderBtnSecondary>
        </TNextLinkWrapper>
      </SAboutButtonGroup>
    </SAboutHeaderIntro>
  </FadeInWhenVisable>
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

    <AboutHeaderContent />
    <PageMain>
      <AboutContent />
    </PageMain>
  </>
);

export default About;

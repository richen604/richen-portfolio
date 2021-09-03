import React from 'react';

import SEO from 'components/Seo';
import SkillsGroup from 'components/SkillsGroup';
import { PageMain } from 'components/pages';
import {
  TButtonLink,
  TNextLinkWrapper,
  TLink,
  TFlexColumn,
} from 'components/ThemedComponents';
import FadeInViewDiv from 'components/FadeInViewDiv';
import Emoji from 'components/Emoji';
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
  SAboutIntroText,
} from './styles';

const AboutHeaderContent = () => (
  <SAboutHeaderIntro id="#">
    <FadeInViewDiv>
      <TFlexColumn>
        <SAboutIntroText>
          <SAboutIntroH1 variant="h1">
            Hi <Emoji label="waving hand" symbol="👋" />, <br /> I&apos;m{' '}
            Richard Henninger
          </SAboutIntroH1>
          <SAboutIntroH5 variant="h5">
            <code>Full Stack Developer</code>
          </SAboutIntroH5>
          <SAboutIntroP note variant="p">
            I&apos;m a software engineer specialized in frontend and backend
            development for complex scalable web apps. Check out my project
            portfolio and online resume for more!
          </SAboutIntroP>
        </SAboutIntroText>
        <SAboutButtonGroup>
          <TNextLinkWrapper href="#portfolio" Component={TButtonLink}>
            <SAboutHeaderBtnPrimary size="lg">
              <SAboutButtonIcon fas icon="angle-double-right" size="lg" />
              <SAboutButtonText>View Portfolio</SAboutButtonText>
            </SAboutHeaderBtnPrimary>
          </TNextLinkWrapper>
          <TNextLinkWrapper href="#contact" Component={TButtonLink}>
            <SAboutHeaderBtnSecondary size="lg">
              <SAboutButtonIcon far icon="paper-plane" size="lg" />
              <SAboutButtonText>Hire Me</SAboutButtonText>
            </SAboutHeaderBtnSecondary>
          </TNextLinkWrapper>
        </SAboutButtonGroup>
      </TFlexColumn>
    </FadeInViewDiv>
  </SAboutHeaderIntro>
);

const AboutContent = () => (
  <>
    <FadeInViewDiv>
      <SAboutContentText>
        <SAboutContentTitle variant="h2">What I Do</SAboutContentTitle>
        <SAboutContentSubtext note variant="p">
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
    </FadeInViewDiv>
    <FadeInViewDiv>
      <TFlexColumn>
        <SkillsGroup />
      </TFlexColumn>
    </FadeInViewDiv>
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

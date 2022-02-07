import Emoji from 'components/Emoji';
import { PageMain } from 'components/pages';
import SEO from 'components/Seo';
import SkillsGroup from 'components/SkillsGroup';
import {
  TButtonLink,
  TFlexColumn,
  TLink,
  TNextLinkWrapper,
} from 'components/ThemedComponents';
import React from 'react';
import {
  SAboutButtonGroup,
  SAboutButtonIcon,
  SAboutButtonText,
  SAboutContentSubtext,
  SAboutContentText,
  SAboutContentTitle,
  SAboutHeaderBtnPrimary,
  SAboutHeaderBtnSecondary,
  SAboutHeaderIntro,
  SAboutIntroH1,
  SAboutIntroH5,
  SAboutIntroP,
  SAboutIntroText,
} from './styles';

const AboutHeaderContent = () => (
  <SAboutHeaderIntro id="#">
    <TFlexColumn>
      <SAboutIntroText>
        <SAboutIntroH1 variant="h1">
          Hi <Emoji label="waving hand" symbol="👋" />, <br /> I&apos;m Richard
          Henninger
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
  </SAboutHeaderIntro>
);

const AboutContent = () => (
  <>
    <SAboutContentText>
      <SAboutContentTitle variant="h2">What I Do</SAboutContentTitle>
      <SAboutContentSubtext note variant="p">
        Below is a quick overview of my main technical skill sets and
        technologies I use. Want to find out more about my experience? Check out
        my{' '}
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
    <TFlexColumn>
      <SkillsGroup />
    </TFlexColumn>
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

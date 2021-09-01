import React from 'react';

import { motion, Variants } from 'framer-motion';
import SEO from 'components/Seo';
import SkillsGroup from 'components/SkillsGroup';
import { PageMain } from 'components/pages';
import {
  TButtonLink,
  TNextLinkWrapper,
  TLink,
} from 'components/ThemedComponents';
import FadeInWhenVisable from 'components/FadeInWhenVisable';
import { MDBContainer } from 'mdb-react-ui-kit';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
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

// TODO move styled components to styles.ts

// TODO refactor to /utils folder, have apply directly to theme with 5 shades
// find a complementary color from an hsl input
const getComplementaryColor = (hex: string) => {
  const colorPart = hex.slice(1);
  const ind = parseInt(colorPart, 16);
  // eslint-disable-next-line no-bitwise
  let iter = ((1 << (4 * colorPart.length)) - 1 - ind).toString(16);
  while (iter.length < colorPart.length) {
    iter = `0${iter}`;
  }
  return `#${iter}`;
};

enum TileGridArea {
  TILE1 = 'tile1',
  TILE2 = 'tile2',
  TILE3 = 'tile3',
}

const SAboutTileGroup = styled(motion.div)`
  grid-area: name;
  background-color: transparent;
  display: grid;
  grid-template-areas: '. tile1 tile1 .' 'tile2 tile2 tile3 tile3';
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: clamp(300px, 50%, 45rem);
  height: clamp(150px, 25%, 18.5rem);
  place-items: center;
`;

// TODO apply theme name handling
const SAboutTile = styled(motion.div)<
  ThemeProps<DefaultTheme> & { tile: TileGridArea }
>`
  grid-area: ${({ tile }) => tile};
  width: 98%;
  height: 98%;
  border: 5px solid
    ${props => getComplementaryColor(props.theme.palette.primary.main)};
  border-radius: 18px;
  margin: 0.5rem;
  z-index: 10;
  position: relative;
`;

// TODO apply theme name handling
const SAboutBlobSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(25rem, 50vw, 50rem);
  height: clamp(25rem, 50vw, 50rem);
  transform: translate(-10%, -10%);
  z-index: 1;
  fill: ${props => props.theme.palette.primary.main};
`;

const SAboutBlobPath = styled.path``;

const SAboutTileGroupContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  grid-area: name;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SAboutPageHeader = styled.div`
  height: 100vh;
  margin: 0;
  background-color: ${props => props.theme.palette.common.pageBackgroundAlt};
  width: 100%;
`;

const SAboutIntroLeftContainer = styled(MDBContainer)`
  margin-bottom: 5rem;
`;

// TODO add framer-motion animations
const containerVariants: Variants = {
  hidden: {} as any,
  show: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
} as Variants;

const tileVariants: Variants = {
  hidden: {
    y: -1000,
    rotate: 180,
  },
  show: {
    y: 0,
    rotate: 0,
    transition: {
      bounce: 0.8,
      damping: 15,
      type: 'spring',
      duration: 4,
    },
  },
};

const AboutTileGroup = () => (
  <SAboutTileGroupContainer
    initial="hidden"
    animate="show"
    variants={containerVariants}
  >
    <SAboutTileGroup>
      <SAboutTile variants={tileVariants} tile={TileGridArea.TILE1} />
      <SAboutTile variants={tileVariants} tile={TileGridArea.TILE2} />
      <SAboutTile variants={tileVariants} tile={TileGridArea.TILE3} />
    </SAboutTileGroup>
    <SAboutBlobSvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <SAboutBlobPath
        d="M65.8,-33.6C79.5,-14.2,81,16.7,68,33.7C54.9,50.8,27.5,53.9,3.1,52.2C-21.3,50.4,-42.6,43.6,-56,26.3C-69.5,9.1,-75.1,-18.8,-64.4,-36.4C-53.8,-54,-26.9,-61.5,-0.4,-61.3C26,-61,52.1,-53.1,65.8,-33.6Z"
        transform="translate(100 100)"
      />
    </SAboutBlobSvg>
  </SAboutTileGroupContainer>
);

const AboutHeaderContent = () => (
  <SAboutHeaderIntro id="#">
    <SAboutIntroLeftContainer fluid>
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
    </SAboutIntroLeftContainer>
    <AboutTileGroup />
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
    <SAboutPageHeader>
      <FadeInWhenVisable>
        <AboutHeaderContent />
      </FadeInWhenVisable>
    </SAboutPageHeader>
    <PageMain>
      <AboutContent />
    </PageMain>
  </>
);

export default About;

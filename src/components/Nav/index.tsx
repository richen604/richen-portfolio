import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faLaptopCode,
  faPaperPlane,
  faUser,
  faEnvelopeOpenText,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import ThemeChanger from '../ThemeChanger';
import { TNextLinkWrapper } from '../ThemedComponents';
import Socials from '../Socials/Socials';
import portrait from '../../images/display-portrait.png';
import {
  SNavContentContainer,
  SNavBrand,
  SNavBarBrand,
  SNavProfileContainer,
  SNavIntroText,
  SNavDivider,
  SNavLinkContainerLink,
  SUserIcon,
  SLaptopIcon,
  SFileIcon,
  SEnvelopeIcon,
  SPlaneIcon,
  SNavFooter,
  SNavLinkContainer,
  SHireMeButton,
  SNavContainer,
  SNavBarName,
  SNavToggle,
  SNavBarContainer,
  SNavbarLeftContainer,
  SNavBarRightContainer,
} from './styles';

interface INav {
  sidebarCollapsed?: boolean;
}

// TODO Conditionally render new components for collapsed sidenav
// TODO Create handling collapsed prop for all styled components
// TODO Create menu Socials component
const Sidebar: React.FunctionComponent<INav> = ({ sidebarCollapsed }: INav) => (
  <>
    <SNavProfileContainer>
      <Link href="/" passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Image
            src={portrait}
            width={200}
            height={200}
            alt="Richard Henninger Portrait"
          />
        </a>
      </Link>

      <SNavIntroText>Full Stack JavaScript Developer</SNavIntroText>
      <Socials isnav />
      <SNavDivider />
    </SNavProfileContainer>
    <SNavLinkContainer>
      <TNextLinkWrapper href="/" Component={SNavLinkContainerLink}>
        <SUserIcon icon={faUser} /> About Me
      </TNextLinkWrapper>
      <TNextLinkWrapper href="/portfolio" Component={SNavLinkContainerLink}>
        <SLaptopIcon icon={faLaptopCode} /> Portfolio
      </TNextLinkWrapper>
      <TNextLinkWrapper href="/resume" Component={SNavLinkContainerLink}>
        <SFileIcon icon={faFileAlt} /> Resume
      </TNextLinkWrapper>
      <TNextLinkWrapper href="/contact" Component={SNavLinkContainerLink}>
        <SEnvelopeIcon icon={faEnvelopeOpenText} /> Contact
      </TNextLinkWrapper>
    </SNavLinkContainer>
    <TNextLinkWrapper href="/contact" Component={SHireMeButton}>
      <SPlaneIcon icon={faPaperPlane} /> Hire Me
    </TNextLinkWrapper>

    <SNavDivider />
    <ThemeChanger isnav />
    <SNavFooter>© {new Date().getFullYear()} Richard Henninger</SNavFooter>
  </>
);

Sidebar.defaultProps = {
  sidebarCollapsed: false,
};

const Nav: React.FunctionComponent<INav> = ({ sidebarCollapsed }: INav) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <SNavContainer>
      <SNavbarLeftContainer>
        <SNavToggle onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </SNavToggle>
        <SNavBarName tag="p">Richard Henninger</SNavBarName>
      </SNavbarLeftContainer>

      <SNavBarRightContainer>
        <ThemeChanger />
        <TNextLinkWrapper href="/" Component={SNavBarBrand}>
          richen.dev
        </TNextLinkWrapper>
      </SNavBarRightContainer>

      <SNavBarContainer show={!collapsed} navbar>
        <Sidebar />
      </SNavBarContainer>
      <SNavContentContainer>
        <TNextLinkWrapper href="/" Component={SNavBrand}>
          richen.dev
        </TNextLinkWrapper>
        <Sidebar sidebarCollapsed={sidebarCollapsed} />
      </SNavContentContainer>
    </SNavContainer>
  );
};

Nav.defaultProps = {
  sidebarCollapsed: false,
};

export default Nav;

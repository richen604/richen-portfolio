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
import styled from 'styled-components';
import { MDBCollapse, MDBNavbarNav, MDBNavbarItem } from 'mdb-react-ui-kit';
import ThemeChanger from './ThemeChanger';
import {
  THireMeButton,
  THireMeLink,
  TNavContainer,
  TNavDivider,
  TNavFooter,
  TNavLink,
  TNavToggle,
  TNextLinkWrapper,
} from './ThemedComponents';
import Socials from './Socials';
import portrait from '../images/display-portrait.png';

// TODO Fix Socials Alignment

// TODO Fix Sidebar Nav Link Icon Alignments

// TODO Fix Footer Alignment

// TODO Migrate Colors to Monocromatic

// TODO Fix MDBBtn Click color

// TODO Make sidebar hideable

// TODO Fix Scrollbar color theme

const SNavContentContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }

  @media only screen and (min-width: 1000px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

const SNavLink = styled(TNavLink)`
  @media only screen and (max-width: 1000px) {
    padding-left: 10px;
  }
`;

const SNavBrand = styled(SNavLink)`
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-weight: bold;
  padding-top: 10px;
  margin: 10px;
  @media only screen and (max-width: 1000px) {
    margin: 0;
  }
  @media only screen and (min-width: 1000px) {
    margin-top: 0.8rem;
  }
`;

const SNavBarBrand = styled(SNavLink)`
  font-weight: bold;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 640px) {
    margin-right: 20px;
  }
`;

const SNavProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SNavIntroText = styled.p`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  line-height: 16px;
  font-style: italic;
  margin: 10px;
  font-size: small;
  font-weight: lighter;
`;

const SNavDivider = styled(TNavDivider)`
  border-radius: 0.5px;
  margin: 10px;
  width: 93%;
  height: 2px;
`;

const SNavLinkContainerLink = styled(TNavLink)`
  display: inline-grid;
  grid-template-columns: 17px 1fr;
  align-items: center;
  height: auto;
  font-weight: bold;
  margin: 10px;
  text-align: left;
`;

const SNavIcon = styled(FontAwesomeIcon)`
  position: relative;
  top: 0;
  right: 10px;
`;

const SUserIcon = styled(SNavIcon)`
  right: 4px;
`;

const SLaptopIcon = styled(SNavIcon)`
  right: 10px;
`;

const SFileIcon = styled(SNavIcon)`
  right: 8px;
`;

const SEnvelopeIcon = styled(SNavIcon)``;

const SPlaneIcon = styled(SNavIcon)`
  right: 4px;
`;

const SHireMeLink = styled(THireMeLink)`
  font-family: 'Montserrat', sans-serif;
`;

const SNavFooter = styled(TNavFooter)`
  font-weight: lighter;
  font-size: smaller;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    font-weight: lighter;
    font-size: smaller;
    margin-top: 10px;
    text-align: center;
  }
  @media only screen and (min-width: 1000px) {
    position: absolute;
    bottom: 0;
  }
`;

const SNavLinkContainer = styled(MDBNavbarNav)`
  margin: 0;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    padding-left: 65px;
    width: 70%;
    justify-content: space-around;
    align-items: left;
  }
  @media only screen and (min-width: 1000px) {
    width: 160px;
    justify-content: center;
    align-items: center;
  }
`;

const SHireMeButton = styled(THireMeButton)`
  justify-self: center;
  align-self: center;
  margin: 10px;
  padding: 5px 10px;
  @media only screen and (max-width: 1000px) {
    min-width: 80%;
    min-height: 38px;
    max-width: 80%;
    max-height: 38px;
  }
  @media only screen and (min-width: 1000px) {
    min-width: 175px;
    min-height: 38px;
    max-width: 175px;
    max-height: 38px;
  }
`;

const SNavContainer = styled(TNavContainer)`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:ital@1&family=Roboto&display=swap');
  margin: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    padding: 10px;
    flex-direction: row;
    align-items: center;
  }
  @media only screen and (min-width: 1000px) {
    padding: 0;
    flex-direction: column;
    align-self: start;
    justify-self: start;
    justify-content: flex-start;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const SNavBarName = styled(MDBNavbarItem)`
  text-align: center;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: smaller;
  padding: 0;
  margin: 2px;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const SNavToggle = styled(TNavToggle)`
  margin: 0px 8px;
  padding: 5px 10px;
  max-width: 36px;
  max-height: 36px;
  &svg {
    font-size: large;
  }
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const SNavBarContainer = styled(MDBCollapse)`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const SNavbarLeftContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const SNavBarRightContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 640px) {
    width: 90px;
    margin-right: 10px;
    margin-left: -10px;
  }
`;

const Sidebar = () => (
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
    <SHireMeButton>
      <TNextLinkWrapper href="/contact" Component={SHireMeLink}>
        <SPlaneIcon icon={faPaperPlane} /> Hire Me
      </TNextLinkWrapper>
    </SHireMeButton>

    <SNavDivider />
    <ThemeChanger isnav />
    <SNavFooter>© {new Date().getFullYear()} Richard Henninger</SNavFooter>
  </>
);

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <SNavContainer sticky>
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
        <Sidebar />
      </SNavContentContainer>
    </SNavContainer>
  );
};

export default Navbar;

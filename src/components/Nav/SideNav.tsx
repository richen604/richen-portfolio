import {
  faUser,
  faLaptopCode,
  faFileAlt,
  faEnvelopeOpenText,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { Socials } from '../Socials';
import ThemeChanger from '../ThemeChanger';
import { TNextLinkWrapper } from '../ThemedComponents';
import {
  SNavContentContainer,
  SNavBrand,
  SEnvelopeIcon,
  SFileIcon,
  SHireMeButton,
  SLaptopIcon,
  SNavDivider,
  SNavFooter,
  SNavIntroText,
  SNavLinkContainer,
  SNavLinkContainerLink,
  SNavProfileContainer,
  SPlaneIcon,
  SUserIcon,
} from './styles';
import portrait from '../../images/display-portrait.png';
import { INav } from './types';

const SCollapsedDivider = styled(SNavDivider)`
  margin: 20px 0;
`;

const SIcon = styled(MDBIcon)`
  color: white;
  margin: 20px 0;
  :hover {
    color: lightgray !important;
  }
`;

const SAirplaneIcon = styled(SIcon)`
  margin-top: 12px;
`;

const SRichenLogo = styled.div`
  width: 25px;
  height: 25px;
  color: white;
  font-weight: bold;
  font-size: 35px;
  margin: 10px 22px 10px 22px;
  :hover {
    color: lightgray !important;
  }
`;

// TODO ADD ThemeChanger Menu

const SideNavCollapsed: React.FunctionComponent<INav> = ({
  sidebarCollapsed,
}: INav) => (
  <>
    <SNavContentContainer>
      <TNextLinkWrapper href="#">
        <SRichenLogo>R</SRichenLogo>
      </TNextLinkWrapper>
      <SCollapsedDivider />
      <Socials collapsed={sidebarCollapsed} />
      <SCollapsedDivider />
      <SNavLinkContainer>
        <TNextLinkWrapper href="#">
          <SIcon fas icon="user-alt" size="lg" />
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#portfolio">
          <SIcon fas icon="laptop-code" size="lg" />
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#contact">
          <SIcon fas icon="envelope-open-text" size="lg" />
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#resume">
          <SIcon fas icon="file-invoice" size="lg" />
        </TNextLinkWrapper>
      </SNavLinkContainer>
      <SCollapsedDivider />
      <TNextLinkWrapper href="#contact">
        <SAirplaneIcon fas icon="paper-plane" size="lg" />
      </TNextLinkWrapper>
    </SNavContentContainer>
  </>
);

const SideNav: React.FunctionComponent<INav> = ({ sidebarCollapsed }: INav) => {
  if (sidebarCollapsed) {
    return <SideNavCollapsed sidebarCollapsed={sidebarCollapsed} />;
  }
  return (
    <>
      <SNavProfileContainer>
        <TNextLinkWrapper href="#" Component={SNavBrand}>
          richen.dev
        </TNextLinkWrapper>
        <Image
          src={portrait}
          width={200}
          height={200}
          alt="Richard Henninger Portrait"
        />

        <SNavIntroText>Full Stack JavaScript Developer</SNavIntroText>
        <Socials isnav />
        <SNavDivider />
      </SNavProfileContainer>
      <SNavLinkContainer>
        <TNextLinkWrapper href="#" Component={SNavLinkContainerLink}>
          <SUserIcon icon={faUser} /> About Me
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#portfolio" Component={SNavLinkContainerLink}>
          <SLaptopIcon icon={faLaptopCode} /> Portfolio
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#contact" Component={SNavLinkContainerLink}>
          <SEnvelopeIcon icon={faEnvelopeOpenText} /> Contact
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#resume" Component={SNavLinkContainerLink}>
          <SFileIcon icon={faFileAlt} /> Resume
        </TNextLinkWrapper>
      </SNavLinkContainer>
      <TNextLinkWrapper href="#contact" Component={SHireMeButton}>
        <SPlaneIcon icon={faPaperPlane} /> Hire Me
      </TNextLinkWrapper>

      <SNavDivider />
      <ThemeChanger isnav />

      <SNavFooter>© {new Date().getFullYear()} Richard Henninger</SNavFooter>
    </>
  );
};

SideNav.defaultProps = {
  sidebarCollapsed: false,
};

export default SideNav;

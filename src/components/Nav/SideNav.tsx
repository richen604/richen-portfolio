import {
  faUser,
  faLaptopCode,
  faFileAlt,
  faEnvelopeOpenText,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
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

const SIcon = styled(MDBIcon)`
  color: white;
  margin: 22px 0;
`;

const SRichenLogo = styled.div`
  width: 25px;
  color: white;
  font-weight: bold;
  font-size: 35px;
  margin-bottom: -10px;
`;

// TODO ADD Socials menu
// TODO ADD ThemeChanger Menu

const SideNavCollapsed: React.FunctionComponent<INav> = ({
  sidebarCollapsed,
}: INav) => (
  <>
    <SNavContentContainer>
      <TNextLinkWrapper href="/">
        <SRichenLogo>R</SRichenLogo>
      </TNextLinkWrapper>
      <SNavDivider />
      <Socials collapsed={sidebarCollapsed} />
      <SNavDivider />
      <SNavLinkContainer>
        <TNextLinkWrapper href="/">
          <SIcon fas icon="user-alt" size="lg" />
        </TNextLinkWrapper>
        <TNextLinkWrapper href="/portfolio">
          <SIcon fas icon="laptop-code" size="lg" />
        </TNextLinkWrapper>
        <TNextLinkWrapper href="/resume">
          <SIcon fas icon="file-invoice" size="lg" />
        </TNextLinkWrapper>
        <TNextLinkWrapper href="/contact">
          <SIcon fas icon="envelope-open-text" size="lg" />
        </TNextLinkWrapper>
      </SNavLinkContainer>
      <SNavDivider />
      <TNextLinkWrapper href="/contact">
        <SIcon fas icon="paper-plane" size="lg" />
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
        <TNextLinkWrapper href="/" Component={SNavBrand}>
          richen.dev
        </TNextLinkWrapper>
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
};

SideNav.defaultProps = {
  sidebarCollapsed: false,
};

export default SideNav;

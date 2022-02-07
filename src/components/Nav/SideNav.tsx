import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import portrait from '../../images/display-portrait.png';
import { Socials } from '../Socials';
import ThemeChanger from '../ThemeChanger';
import { TNavLink, TNextLinkWrapper } from '../ThemedComponents';
import {
  SHireMeButton,
  SNavBrand,
  SNavContentContainer,
  SNavDivider,
  SNavIcon,
  SNavLinkContainer,
  SNavLinkContainerLink,
  SNavLinkGrid,
  SNavProfileContainer,
  SSideNavCollapsedLinks,
} from './styles';
import { INav } from './types';

const SCollapsedDivider = styled(SNavDivider)`
  margin: 20px 0 !important;
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
        <TNextLinkWrapper href="#" Component={SSideNavCollapsedLinks}>
          <SNavIcon fas icon="user-alt" size="lg" />
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#portfolio" Component={SSideNavCollapsedLinks}>
          <SNavIcon fas icon="laptop-code" size="lg" />
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#contact" Component={SSideNavCollapsedLinks}>
          <SNavIcon fas icon="envelope-open-text" size="lg" />
        </TNextLinkWrapper>
        <TNextLinkWrapper href="#resume" Component={SSideNavCollapsedLinks}>
          <SNavIcon fas icon="file-invoice" size="lg" />
        </TNextLinkWrapper>
      </SNavLinkContainer>
      <SCollapsedDivider />
      <TNextLinkWrapper href="#contact" Component={TNavLink}>
        <SNavIcon fas icon="paper-plane" size="lg" />
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
        <Socials isnav />
        <SNavDivider />
      </SNavProfileContainer>
      <SNavLinkContainer>
        <SNavLinkGrid>
          <TNextLinkWrapper href="#" Component={SNavLinkContainerLink}>
            <SNavIcon fas icon="user-alt" size="lg" /> About Me
          </TNextLinkWrapper>
          <TNextLinkWrapper href="#portfolio" Component={SNavLinkContainerLink}>
            <SNavIcon fas icon="laptop-code" size="lg" /> Portfolio
          </TNextLinkWrapper>
          <TNextLinkWrapper href="#contact" Component={SNavLinkContainerLink}>
            <SNavIcon fas icon="envelope-open-text" size="lg" /> Contact
          </TNextLinkWrapper>
          <TNextLinkWrapper href="#resume" Component={SNavLinkContainerLink}>
            <SNavIcon fas icon="file-invoice" size="lg" /> Resume
          </TNextLinkWrapper>
        </SNavLinkGrid>
      </SNavLinkContainer>
      <TNextLinkWrapper href="#contact" Component={SHireMeButton}>
        <SNavIcon fas icon="paper-plane" /> Hire Me
      </TNextLinkWrapper>

      <SNavDivider />
      <ThemeChanger isnav />
    </>
  );
};

SideNav.defaultProps = {
  sidebarCollapsed: false,
};

export default SideNav;

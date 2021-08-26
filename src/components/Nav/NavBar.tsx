import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ThemeChanger from '../ThemeChanger';
import { TNextLinkWrapper } from '../ThemedComponents';
import SideNav from './SideNav';
import {
  SNavBarBrand,
  SNavBarContainer,
  SNavbarLeftContainer,
  SNavBarName,
  SNavBarRightContainer,
  SNavContainer,
  SNavContentContainer,
  SNavToggle,
} from './styles';
import { INav } from './types';

const NavBar: React.FunctionComponent<INav> = ({ sidebarCollapsed }: INav) => {
  const [collapsed, setCollapsed] = useState(false);

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
        <TNextLinkWrapper href="#/" Component={SNavBarBrand}>
          richen.dev
        </TNextLinkWrapper>
      </SNavBarRightContainer>
      <SNavBarContainer show={collapsed} navbar>
        <SideNav />
      </SNavBarContainer>

      <SNavContentContainer>
        <SideNav sidebarCollapsed={sidebarCollapsed} />
      </SNavContentContainer>
    </SNavContainer>
  );
};

export default NavBar;

/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { MDBIcon } from 'mdb-react-ui-kit';
import SEO from 'components/Seo';
import { RootState } from '../../../redux';
import {
  SLayoutContainer,
  SLayoutNav,
  SLayoutChildrenContainer,
  SLayoutChildrenSpacer,
  SCollapseButton,
} from './styles';

import { Nav } from '../Nav';

const SCollapseIcon = styled(MDBIcon)``;

const SCaret = styled(MDBIcon)`
  padding-left: 5px;
  justify-self: center;
  align-self: center;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const { theme } = useSelector((state: RootState) => state);
  const [collapsed, setCollapse] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <SLayoutContainer>
        <SLayoutNav collapse={collapsed}>
          <Nav sidebarCollapsed={collapsed} />
        </SLayoutNav>
        <SCollapseButton
          collapse={collapsed}
          onClick={() => setCollapse(!collapsed)}
        >
          <SCollapseIcon fas icon="bars" size="2x" />
          {collapsed && <SCaret fas icon="caret-right" size="lg" />}
          {!collapsed && <SCaret fas icon="caret-left" size="lg" />}
        </SCollapseButton>
        <SLayoutChildrenContainer collapse={collapsed}>
          {children}
          <SLayoutChildrenSpacer />
        </SLayoutChildrenContainer>
      </SLayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;

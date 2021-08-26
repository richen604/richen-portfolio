/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { MDBIcon } from 'mdb-react-ui-kit';
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
  const [collapse, setCollapse] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <SLayoutContainer>
        <SLayoutNav collapse={collapse}>
          <Nav sidebarCollapsed={collapse} />
        </SLayoutNav>
        <SCollapseButton
          collapse={collapse}
          onClick={() => setCollapse(!collapse)}
        >
          <SCollapseIcon fas icon="bars" size="2x" />
          {collapse && <SCaret fas icon="caret-right" size="lg" />}
          {!collapse && <SCaret fas icon="caret-left" size="lg" />}
        </SCollapseButton>
        <SLayoutChildrenContainer collapse={collapse}>
          {children}
          <SLayoutChildrenSpacer />
        </SLayoutChildrenContainer>
      </SLayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;

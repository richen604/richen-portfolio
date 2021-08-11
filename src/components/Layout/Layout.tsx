/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { RootState } from '../../redux';
import {
  SLayoutContainer,
  SLayoutNav,
  SLayoutChildrenContainer,
  SLayoutChildrenSpacer,
  SCollapseButton,
} from './styles';

import { Nav } from '../Nav';

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
          Collapse
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

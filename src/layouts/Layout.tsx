/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { MDBBtn } from 'mdb-react-ui-kit';
import { RootState } from '../store';

import Navbar from '../components/Nav';
import { TLayoutChildrenSpacer } from '../components/ThemedComponents';
import { THEME } from '../styled.d';

interface LayoutProps {
  children?: React.ReactNode;
}

const SLayoutContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:ital@1&family=Roboto&display=swap');

  display: flex;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.black};`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darkest};`;
      case THEME.LIGHT:
      default:
        return `background-color: ${props.theme.palette.primary.main};`;
    }
  }}
`;

const SLayoutNav = styled.div<{ collapse: boolean }>`
  padding: 0;
  margin: 0;
  transition: 0.5s;
  z-index: 2;

  @media only screen and (max-width: 1000px) {
    width: 100vw;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media only screen and (min-width: 1000px) {
    justify-content: center;
    align-items: flex-start;
    min-width: ${props => (props.collapse ? '50px' : '305px')};
    max-width: ${props => (props.collapse ? '50px' : '305px')};
    padding: 0;
    margin: 0;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
`;

const SLayoutChildrenContainer = styled.main<{ collapse: boolean }>`
  display: flex;
  flex-direction: column;
  align-self: normal;
  transition: 0.5s;
  z-index: auto;

  @media only screen and (max-width: 1000px) {
    width: 100vw;
    height: 100%;
  }

  @media only screen and (min-width: 1000px) {
    width: ${props =>
      props.collapse ? `calc(100vw - 50px)` : 'calc(100vw - 305px)'};
    height: max-content;
  }
`;

const SLayoutChildrenSpacer = styled(TLayoutChildrenSpacer)`
  width: 100%;
  height: 20px;
`;

const SCollapseButton = styled(MDBBtn)<{ collapse: boolean }>`
  transition: 0.5s ease-in-out;
  position: fixed;
  z-index: 2;
  top: 0;
  left: ${props => (props.collapse ? '50px' : '305px')};
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const { theme } = useSelector((state: RootState) => state);
  const [collapse, setCollapse] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <SLayoutContainer>
        <SLayoutNav collapse={collapse}>
          <Navbar sidebarCollapsed={collapse} />
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

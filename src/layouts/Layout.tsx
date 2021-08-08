/* eslint-disable react/require-default-props */
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { RootState } from '../store';
import Nav from '../components/Nav';
import { TLayoutChildrenSpacer } from '../components/ThemedComponents';

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
`;

const SLayoutNav = styled.div`
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 1000px) {
    width: 100vw;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  @media only screen and (min-width: 1000px) {
    justify-content: center;
    align-items: flex-start;
    min-width: 305px;
    max-width: 305px;
    padding: 0;
    margin: 0;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
`;

const SLayoutChildrenContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-self: normal;
  @media only screen and (max-width: 1000px) {
    width: 100vw;
    height: 100%;
  }

  @media only screen and (min-width: 1000px) {
    width: calc(100vw - 305px);
    height: max-content;
  }
`;

const SLayoutChildrenSpacer = styled(TLayoutChildrenSpacer)`
  width: 100%;
  height: 20px;
`;

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const { theme } = useSelector((state: RootState) => state);

  return (
    <ThemeProvider theme={theme}>
      <SLayoutContainer>
        <SLayoutNav>
          <Nav />
        </SLayoutNav>
        <SLayoutChildrenContainer>
          {children}
          <SLayoutChildrenSpacer />
        </SLayoutChildrenContainer>
      </SLayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;

/* eslint-disable react/require-default-props */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { MDBIcon } from 'mdb-react-ui-kit';
import SEO from 'components/Seo';
import { ThemeState } from 'reducers/themeReducer';
import { changeLayout } from 'reducers/layoutReducer';
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

export interface IThemeWithCollapse extends ThemeState {
  collapsed: boolean;
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const { theme, layout } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleCollapseChange = () => {
    dispatch(changeLayout({ ...layout, collapsed: !layout.collapsed }));
  };
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <SLayoutContainer>
        <SLayoutNav collapse={layout.collapsed}>
          <Nav sidebarCollapsed={layout.collapsed} />
        </SLayoutNav>
        <SCollapseButton
          collapse={layout.collapsed}
          onClick={() => handleCollapseChange()}
        >
          <SCollapseIcon fas icon="bars" size="2x" />
          {layout.collapsed && <SCaret fas icon="caret-right" size="lg" />}
          {!layout.collapsed && <SCaret fas icon="caret-left" size="lg" />}
        </SCollapseButton>
        <SLayoutChildrenContainer collapse={layout.collapsed}>
          {children}
          <SLayoutChildrenSpacer />
        </SLayoutChildrenContainer>
      </SLayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;

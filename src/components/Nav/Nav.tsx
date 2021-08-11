import React from 'react';
import NavBar from './NavBar';
import { INav } from './types';

const Nav: React.FunctionComponent<INav> = ({ sidebarCollapsed }: INav) => (
  <NavBar sidebarCollapsed={sidebarCollapsed} />
);

Nav.defaultProps = {
  sidebarCollapsed: false,
};

export default Nav;

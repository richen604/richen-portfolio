/* eslint-disable react/require-default-props */
import React from 'react';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';

interface PageHeaderProps {
  children?: React.ReactNode;
}

const SPageHeaderContainer = styled.div<ThemeProps<DefaultTheme>>`
  display: flex;
  padding: 30px 40px;
  margin: 0;
  background-color: ${props => props.theme.palette.common.pageBackgroundAlt};
  width: 100%;
`;

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
}: PageHeaderProps) => <SPageHeaderContainer>{children}</SPageHeaderContainer>;

export default PageHeader;

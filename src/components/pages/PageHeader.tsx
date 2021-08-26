/* eslint-disable react/require-default-props */
import React from 'react';
import { SPageHeaderContainer } from './styles';

interface PageHeaderProps {
  children?: React.ReactNode;
  id?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  id,
}: PageHeaderProps) => (
  <SPageHeaderContainer id={id}>{children}</SPageHeaderContainer>
);

export default PageHeader;

/* eslint-disable react/require-default-props */
import React from 'react';
import { SPageHeaderContainer } from './styles';

interface PageHeaderProps {
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
}: PageHeaderProps) => <SPageHeaderContainer>{children}</SPageHeaderContainer>;

export default PageHeader;

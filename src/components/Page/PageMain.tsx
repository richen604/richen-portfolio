/* eslint-disable react/require-default-props */
import React from 'react';
import { SPageMain } from './styles';

interface Props {
  children?: React.ReactNode;
}

const PageMain: React.FunctionComponent<Props> = ({ children }: Props) => (
  <SPageMain>{children}</SPageMain>
);

export default PageMain;

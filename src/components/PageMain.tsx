/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { TPageMain } from './ThemedComponents';

interface Props {
  children?: React.ReactNode;
}

const SPageMain = styled(TPageMain)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const PageMain: React.FunctionComponent<Props> = ({ children }: Props) => (
  <SPageMain>{children}</SPageMain>
);

export default PageMain;

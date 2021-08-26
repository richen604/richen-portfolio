import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { TPageMain } from '../ThemedComponents';

export const SPageMain = styled(TPageMain)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const SPageHeaderContainer = styled.div<ThemeProps<DefaultTheme>>`
  display: flex;
  padding: 30px 40px;
  margin: 0;
  background-color: ${props => props.theme.palette.common.pageBackgroundAlt};
  width: 100%;
`;

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { TPageMain } from '../ThemedComponents';

export const SPageMain = styled(TPageMain)`
  width: 100%;
  height: 100%;
`;

export const SPageHeaderContainer = styled.div<ThemeProps<DefaultTheme>>`
  height: max-content;
  margin: 0;
  padding: 10rem 5rem;
  background-color: ${props => props.theme.palette.common.pageBackgroundAlt};
  width: 100%;
`;

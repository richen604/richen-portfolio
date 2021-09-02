import { MDBTypography } from 'mdb-react-ui-kit';
import { THEME } from 'theme';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
// TODO Refactor Themed Components TText* to here
// TODO Include fonts here in fonts.ts or in a config folder

export const TTextPrimary = styled(MDBTypography)<ThemeProps<DefaultTheme>>`
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `color: ${props.theme.palette.common.white};`;
      case THEME.DARK:
        return `color: ${props.theme.palette.common.white};`;
      case THEME.LIGHT:
      default:
        return `color: ${props.theme.palette.common.black};`;
    }
  }}
`;

export const TTextMuted = styled(MDBTypography)<ThemeProps<DefaultTheme>>`
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `color: ${props.theme.palette.common.textMuted};`;
      case THEME.DARK:
        return `color: ${props.theme.palette.common.textMuted};`;
      case THEME.LIGHT:
      default:
        return `color: ${props.theme.palette.common.textMuted};`;
    }
  }}
`;

// TODO change color for themes
export const TTextSecondary = styled(MDBTypography)<ThemeProps<DefaultTheme>>`
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `color: ${props.theme.palette.common.white};`;
      case THEME.DARK:
        return `color: ${props.theme.palette.common.white};`;
      case THEME.LIGHT:
      default:
        return `color: ${props.theme.palette.common.white};`;
    }
  }}
`;

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

export const SPageDividerH2 = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 10px;
  @media only screen and (min-width: 1000px) {
    font-size: 3rem;
    margin: 5px 13px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 1rem;
    margin: 10px 15px;
  }
`;

export const SAboutIntroH1 = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  font-weight: 700;
  @media only screen and (min-width: 1000px) {
    font-size: 4rem;
    margin: 5px 13px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
    margin: 10px 15px;
  }
`;

export const SAboutIntroH5 = styled(TTextPrimary)`
  margin: 5px 15px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  line-height: 36px;
  font-weight: 300;
`;

export const SAboutIntroP = styled(TTextPrimary)`
  margin: 25px 16px;
  padding-left: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 0.5vw, 2.5rem);
  line-height: 32px;
  font-weight: 400;
`;

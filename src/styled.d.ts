import 'styled-components';

export interface PrimaryPalette {
  lightest: string;
  lighter: string;
  main: string;
  darker: string;
  darkest: string;
}

export interface EventPalette {
  success: string;
  error: string;
  warning: string;
  info: string;
}

export interface CommonPalette {
  black: string;
  white: string;
  textMuted: string;
  accentBackground: string;
  pageBackground: string;
  pageBackgroundAlt: string;
}

export interface SecondaryPalette {
  main: string;
  contrast: string;
}

export enum THEME {
  LIGHT,
  DARK,
  MONOCHROMATIC,
}

export declare module 'styled-components' {
  export interface DefaultTheme {
    name: THEME;
    palette: {
      common: CommonPalette;
      primary: PrimaryPalette;
      secondary: SecondaryPalette;
      event: EventPalette;
    };
  }
}

import { DefaultTheme, DefaultThemeEnum } from 'styled-components';

export enum THEME {
  LIGHT,
  DARK,
  MONOCHROMATIC,
}

/*
    Major themes
        - Monochromatic
        - Light
        - Dark
    Accents
        - Light / Dark will have a function creating accent state from color selector
        - Light / Dark will also have a wider arrange of colored accents
        - Monochromatic will have accent state handled direction from color selector
    Light theme:
      - darker colors for calls to action, lighter colors for hoisted elements and elements over color
      - lighter theme has darker accent backgrounds
      - need a background checker for light themes to check text contrast eventually, for now we can assume white text
    Dark theme: 
      - darker colors for calls to action, lighter colors for hoisted elements and elements over color
      - dark theme has lighter accent backgrounds
*/

// TODO refactor hex to hsl !important

export const defaultStyling = {
  layout: {
    borderRadius: '6px',
    innerComponentMargins: '10px',
    outerComponentMargins: '20px',
  },
};

console.log('IMPORTANT, ENUM', DefaultThemeEnum);

export const lightDefaultTheme: DefaultTheme = {
  name: THEME.LIGHT,
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
      textMuted: '#757E85',
      accentBackground: '#53b688',
      pageBackground: '#ffffff',
      pageBackgroundAlt: '#FAFAFA',
    },
    primary: {
      lightest: '#9ed6bb',
      lighter: '#79c6a2',
      main: '#53b688',
      darker: '#3f956d',
      darkest: '#307052',
    },
    secondary: {
      main: '#494949',
      contrast: '#363636',
    },
    event: {
      success: '#2DA94A',
      error: '#E25764',
      warning: '#FFC20B',
      info: '#17A2B8',
    },
  },
};

export const darkDefaultTheme: DefaultTheme = {
  name: THEME.DARK,
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
      textMuted: '#757E85',
      accentBackground: '#53b688',
      pageBackground: '#181A20',
      pageBackgroundAlt: '#262A34',
    },
    primary: {
      lightest: '#9ed6bb',
      lighter: '#79c6a2',
      main: '#53b688',
      darker: '#3f956d',
      darkest: '#307052',
    },
    secondary: {
      main: '#494949',
      contrast: '#363636',
    },
    event: {
      success: '#2DA94A',
      error: '#E25764',
      warning: '#FFC20B',
      info: '#17A2B8',
    },
  },
};

export const monochromaticDefaultTheme: DefaultTheme = {
  name: THEME.MONOCHROMATIC,
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
      textMuted: '#757E85',
      accentBackground: '#000000',
      pageBackground: '#000000',
      pageBackgroundAlt: '#161616',
    },
    primary: {
      lightest: '#9ed6bb',
      lighter: '#79c6a2',
      main: '#53b688',
      darker: '#3f956d',
      darkest: '#307052',
    },
    secondary: {
      main: '#494949',
      contrast: '#363636',
    },
    event: {
      success: '#2DA94A',
      error: '#E25764',
      warning: '#FFC20B',
      info: '#17A2B8',
    },
  },
};

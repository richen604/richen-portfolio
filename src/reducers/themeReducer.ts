import { DefaultTheme, THEME } from 'styled-components';

import {
  darkDefaultTheme,
  lightDefaultTheme,
  monochromaticDefaultTheme,
} from '../theme';

export interface ThemeState extends DefaultTheme {}

const handleThemeChange = (themeArg: THEME) => {
  switch (+themeArg) {
    case THEME.DARK:
      return darkDefaultTheme;
    case THEME.MONOCHROMATIC:
      return monochromaticDefaultTheme;
    case THEME.LIGHT:
    default:
      return lightDefaultTheme;
  }
};

export const changeTheme = (themeArg: THEME) => async dispatch => {
  const theme = handleThemeChange(themeArg);
  return dispatch({
    type: 'CHANGE_THEME',
    data: {
      theme,
    },
  });
};

export const resetTheme = () => async dispatch => {
  dispatch({
    type: 'RESET_THEME',
  });
};

export const changeAccent = accent => async dispatch => {
  dispatch({ type: 'CHANGE_ACCENT', data: { accent } });
};

export const hexToHSL = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error('Hex Result is null, bad request');

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;
  if (max === min) {
    // achromatic
    h = 0;
    s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  const HSL = {
    h,
    s,
    l,
  };
  return HSL;
};

// takes a single hsla and outputs 4 colors, 2 lighter and 2 darker
const generatePalette = HSL => {
  // TODO handle if + / - num is (> 0 / < 255)
  /*
    ? Max Lumosity 55, min 22, step can be 11 - 13 to be noticeable 
  */
  const primary = {
    main: `hsl(${HSL.h}, ${HSL.s}%, ${HSL.l}%)`,
    lighter: `hsl(${HSL.h}, ${HSL.s - 11}%, ${HSL.l - 11}%)`,
    lightest: `hsl(${HSL.h}, ${HSL.s - 22}%, ${HSL.l - 22}%)`,
    darker: `hsl(${HSL.h}, ${HSL.s + 11}%, ${HSL.l + 11}%)`,
    darkest: `hsl(${HSL.h}, ${HSL.s + 22}%, ${HSL.l + 22}%)`,
  };
  return primary;
};

const generateTheme = (primary, state: ThemeState) => {
  let newState: ThemeState;
  switch (state.name) {
    case THEME.DARK: {
      // primary doesnt change component colors
      newState = {
        ...state,
        palette: {
          ...state.palette,
          primary,
          common: { ...state.palette.common, accentBackground: primary.main },
        },
      };
      break;
    }
    case THEME.MONOCHROMATIC: {
      newState = { ...state, palette: { ...state.palette, primary } };
      break;
    }
    case THEME.LIGHT:
    default: {
      newState = {
        ...state,
        palette: {
          ...state.palette,
          primary,
          common: { ...state.palette.common, accentBackground: primary.main },
        },
      };
      break;
    }
  }
  return newState;
};

// accent will be hex, will need to be converted to hsl for palette generation
const handleAccentChange = (hex: string, state: ThemeState) => {
  const HSL = hexToHSL(hex);
  const primary = generatePalette(HSL);
  const newTheme = generateTheme(primary, state);
  return newTheme;
};

const themeReducer = (
  state: ThemeState = darkDefaultTheme,
  action
): ThemeState => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return action.data.theme;
    case 'RESET_THEME':
      return lightDefaultTheme;
    case 'CHANGE_ACCENT': {
      const { accent } = action.data.accent;
      const newTheme = handleAccentChange(accent, { ...state });
      return newTheme;
    }
    default:
      return state;
  }
};

export default themeReducer;

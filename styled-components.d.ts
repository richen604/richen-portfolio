import { THEME } from 'theme';

import 'styled-components';

declare module 'styled-components' {
  interface PrimaryPalette {
    lightest: string;
    lighter: string;
    main: string;
    darker: string;
    darkest: string;
  }

  interface EventPalette {
    success: string;
    error: string;
    warning: string;
    info: string;
  }

  interface CommonPalette {
    black: string;
    white: string;
    textMuted: string;
    accentBackground: string;
    pageBackground: string;
    pageBackgroundAlt: string;
  }

  interface SecondaryPalette {
    main: string;
    contrast: string;
  }

  interface DefaultTheme {
    name: THEME;
    palette: {
      common: CommonPalette;
      primary: PrimaryPalette;
      secondary: SecondaryPalette;
      event: EventPalette;
    };
  }
}

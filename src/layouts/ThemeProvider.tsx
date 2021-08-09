import React from 'react';
import { AppProps } from 'next/app';
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useSelector((state: RootState) => state);
  console.log('theme in provider', theme);
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

// Reset default browser styling
const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    min-height: 100vh;
  }

  body {
    min-height: 100vh;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  #__next {
    min-height: 100vh;
  }
`;

export default ThemeProvider;

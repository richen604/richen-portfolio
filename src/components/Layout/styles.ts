import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { TLayoutChildrenSpacer, TButtonPrimary } from '../ThemedComponents';
import { THEME } from '../../styled.d';

export const SLayoutContainer = styled.div<ThemeProps<DefaultTheme>>`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:ital@1&family=Roboto&display=swap');

  display: flex;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
  }

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.black};`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darkest};`;
      case THEME.LIGHT:
      default:
        return `background-color: ${props.theme.palette.primary.main};`;
    }
  }}
`;

export const SLayoutNav = styled.div<{ collapse: boolean }>`
  padding: 0;
  margin: 0;
  transition: 0.5s;
  z-index: 2;

  @media only screen and (max-width: 1000px) {
    width: 100vw;
    margin: 0;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media only screen and (min-width: 1000px) {
    justify-content: center;
    align-items: flex-start;
    min-width: ${props => (props.collapse ? '50px' : '305px')};
    max-width: ${props => (props.collapse ? '50px' : '305px')};
    padding: 0;
    margin: 0;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
`;

export const SLayoutChildrenContainer = styled.main<{ collapse: boolean }>`
  display: flex;
  flex-direction: column;
  align-self: normal;
  transition: 0.5s;
  z-index: auto;

  @media only screen and (max-width: 1000px) {
    width: 100vw;
    height: 100%;
  }

  @media only screen and (min-width: 1000px) {
    width: ${props =>
      props.collapse ? `calc(100vw - 50px)` : 'calc(100vw - 305px)'};
    height: max-content;
  }
`;

export const SLayoutChildrenSpacer = styled(TLayoutChildrenSpacer)`
  width: 100%;
  height: 20px;
`;

export const SCollapseButton = styled(TButtonPrimary)<{ collapse: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  box-shadow: none;
  border-radius: 0 10px 10px 0px;
  transition: 0.5s;
  position: fixed;
  z-index: 2;
  top: 0;
  left: ${props => (props.collapse ? '50px' : '305px')};
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  margin: 0;
`;

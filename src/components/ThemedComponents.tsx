import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBNavbar,
  MDBTypography,
} from 'mdb-react-ui-kit';
import ReactGA from 'react-ga';
import styled, {
  ThemeProps,
  DefaultTheme,
  createGlobalStyle,
} from 'styled-components';
import Link from 'next/link';
import { THEME } from '../styled.d';

// Common Components

export const GlobalStyle = createGlobalStyle<ThemeProps<DefaultTheme>>`
 html, body {
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
}
`;

// TODO change dark theme outline
export const TButtonPrimary = styled(MDBBtn)<ThemeProps<DefaultTheme>>`
  margin: 10px;
  min-height: 35px;
  padding: 5px 10px;
  max-width: 150px;
  max-height: 36px;
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.white} !important; border-color: ${props.theme.palette.common.white} !important; color: ${props.theme.palette.common.black} !important;`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`;
      case THEME.LIGHT:
      default:
        return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.darker} !important; color: ${props.theme.palette.common.white} !important;`;
    }
  }}
  &:hover {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.black} !important; background-color: #b8b8b8 !important; border-color: #b8b8b8 !important;`;
        case THEME.DARK:
          return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`;
        case THEME.LIGHT:
        default:
          return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.darkest} !important; color: ${props.theme.palette.common.white} !important;`;
      }
    }}
  }
  &:focus {
    box-shadow: none !important;
  }
`;

// TODO change Secondary Color for themes
export const TButtonSecondary = styled(MDBBtn)<ThemeProps<DefaultTheme>>`
  margin: 10px;
  min-height: 35px;
  padding: 5px 10px;
  max-width: 150px;
  max-height: 36px;
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.white} !important; border-color: ${props.theme.palette.common.white} !important; color: ${props.theme.palette.common.black} !important;`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`;
      case THEME.LIGHT:
      default:
        return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.darker} !important; color: ${props.theme.palette.common.white} !important;`;
    }
  }}
  &:hover {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.black} !important; background-color: #b8b8b8 !important; border-color: #b8b8b8 !important;`;
        case THEME.DARK:
          return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`;
        case THEME.LIGHT:
        default:
          return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.darkest} !important; color: ${props.theme.palette.common.white} !important;`;
      }
    }}
  }
  &:focus {
    box-shadow: none !important;
  }
`;

export const TTextPrimary = styled(MDBTypography)`
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

export const TTextMuted = styled(MDBTypography)`
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
export const TTextSecondary = styled(MDBTypography)`
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

// TODO change color for themes
export const TLink = styled.a`
  &:hover {
    text-decoration: none;
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.white};`;
        case THEME.DARK:
          return `color: ${props.theme.palette.primary.darkest};`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.primary.darkest};`;
      }
    }}
  }
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `color: ${props.theme.palette.common.white};`;
      case THEME.DARK:
        return `color: ${props.theme.palette.primary.darker};`;
      case THEME.LIGHT:
      default:
        return `color: ${props.theme.palette.primary.darker};`;
    }
  }}
`;

interface INextLinkWrapper {
  children?: React.ReactNode;
  href: string;
  Component?: React.FunctionComponent;
}

export const TNextLinkWrapper = ({
  children,
  href,
  Component,
}: INextLinkWrapper) => (
  <Link href={href} passHref>
    {Component ? <Component>{children}</Component> : <a>{children}</a>}
  </Link>
);

export const TLocalLink = ({ children, href }) => (
  <Link href={href} passHref>
    <TLink>{children}</TLink>
  </Link>
);

export const TOutboundLinkText = styled(ReactGA.OutboundLink)`
  &:hover {
    text-decoration: none;
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.white};`;
        case THEME.DARK:
          return `color: ${props.theme.palette.primary.darkest};`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.primary.darkest};`;
      }
    }}
  }
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `color: ${props.theme.palette.common.white};`;
      case THEME.DARK:
        return `color: ${props.theme.palette.primary.darker};`;
      case THEME.LIGHT:
      default:
        return `color: ${props.theme.palette.primary.darker};`;
    }
  }}
`;

export const TOutBoundLink = styled(ReactGA.OutboundLink)``;

export const TButtonLink = styled.a<ThemeProps<DefaultTheme>>`
  &:hover {
    text-decoration: none;
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.black};`;
        case THEME.DARK:
          return `color: ${props.theme.palette.common.white};`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.common.white};`;
      }
    }}
  }
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `color: ${props.theme.palette.common.black};`;
      case THEME.DARK:
        return `color: ${props.theme.palette.common.white};`;
      case THEME.LIGHT:
      default:
        return `color: ${props.theme.palette.common.white};`;
    }
  }}
`;

// Nav Components

export const TNavLink = styled.a<ThemeProps<DefaultTheme>>`
  color: ${props => props.theme.palette.common.white};
  &:hover {
    text-decoration: none;
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: #b8b8b8`;
        case THEME.DARK:
          return `color: ${props.theme.palette.primary.main};`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.primary.darker};`;
      }
    }}
  }
`;

export const TNavDivider = styled.div<ThemeProps<DefaultTheme>>`
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.white}`;
      case THEME.DARK:
      case THEME.LIGHT:
      default:
        return `background-color: ${props.theme.palette.primary.darker};`;
    }
  }}
`;

export const THireMeLink = styled.a<ThemeProps<DefaultTheme>>`
  &:hover {
    text-decoration: none;
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.black};`;
        case THEME.DARK:
          return `color: ${props.theme.palette.common.white};`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.common.white};`;
      }
    }}
  }
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `color: ${props.theme.palette.common.black};`;
      case THEME.DARK:
        return `color: ${props.theme.palette.common.white};`;
      case THEME.LIGHT:
      default:
        return `color: ${props.theme.palette.common.white};`;
    }
  }}
`;

export const TNavFooter = styled.footer<ThemeProps<DefaultTheme>>`
  color: ${props => props.theme.palette.common.white};
`;

export const THireMeButton = styled(MDBBtn)<ThemeProps<DefaultTheme>>`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.white} !important; border-color: ${props.theme.palette.common.white} !important; color: ${props.theme.palette.common.black} !important;`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`;
      case THEME.LIGHT:
      default:
        return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.darker} !important; color: ${props.theme.palette.common.white} !important;`;
    }
  }}
  &:hover {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.black} !important; background-color: #b8b8b8 !important; border-color: #b8b8b8 !important;`;
        case THEME.DARK:
          return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`;
        case THEME.LIGHT:
        default:
          return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.darkest} !important; color: ${props.theme.palette.common.white} !important;`;
      }
    }}
  }
  &:focus {
    box-shadow: none !important;
  }
`;

export const TNavContainer = styled(MDBNavbar)<ThemeProps<DefaultTheme>>`
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `color: ${props.theme.palette.common.white}; background-color: ${props.theme.palette.common.black}; border-color: ${props.theme.palette.common.black};`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darkest}; border-color: ${props.theme.palette.primary.darkest}; color: ${props.theme.palette.common.white};`;
      case THEME.LIGHT:
      default:
        return `background-color: ${props.theme.palette.primary.main}; border-color: ${props.theme.palette.primary.main}; color: ${props.theme.palette.common.white};`;
    }
  }}
  @media only screen and (min-width: 1000px) {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `scrollbar-color: ${props.theme.palette.common.black} ${props.theme.palette.common.white};`;
        case THEME.DARK:
          return `scrollbar-color: ${props.theme.palette.primary.main} ${props.theme.palette.primary.darkest};`;
        case THEME.LIGHT:
        default:
          return `scrollbar-color: ${props.theme.palette.primary.darker} ${props.theme.palette.primary.main};`;
      }
    }}
  }
`;

export const TNavToggle = styled(MDBBtn)<ThemeProps<DefaultTheme>>`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.white} !important; border-color: ${props.theme.palette.common.white} !important; color: ${props.theme.palette.common.black} !important;`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`;
      case THEME.LIGHT:
      default:
        return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.darker} !important; color: ${props.theme.palette.common.white} !important;`;
    }
  }}
  &:hover {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.black} !important; background-color: #b8b8b8 !important; border-color: #b8b8b8 !important;`;
        case THEME.DARK:
          return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`;
        case THEME.LIGHT:
        default:
          return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.darkest} !important; color: ${props.theme.palette.common.white} !important;`;
      }
    }}
  }
  &:focus {
    box-shadow: none !important;
  }
`;

// Socials Components

export const TSocialsBorder = styled.div`
  &:hover {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
        case THEME.DARK:
        case THEME.LIGHT:
        default:
          return `background-color: #b8b8b8;`;
      }
    }}
  }
`;

export const TSocialsIcon = styled(FontAwesomeIcon)`
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `color: ${props.theme.palette.common.black};`;
      case THEME.DARK:
        return `color: ${props.theme.palette.primary.darker};`;
      case THEME.LIGHT:
      default:
        return `color: ${props.theme.palette.primary.main};`;
    }
  }}
`;

// Layout Components

export const TLayoutChildrenSpacer = styled.div<ThemeProps<DefaultTheme>>`
  background-color: ${props => props.theme.palette.common.pageBackground};
`;

export const TPageHeader = styled.div<ThemeProps<DefaultTheme>>`
  background-color: ${props => props.theme.palette.common.pageBackgroundAlt};
`;

export const TPageMain = styled.div<ThemeProps<DefaultTheme>>`
  background-color: ${props => props.theme.palette.common.pageBackground};
`;

// Pocket Feed Components

// SkillsGroup / ProjectCardGroup Component

export const TCard = styled(MDBCard)`
  background-color: ${props => props.theme.palette.common.pageBackgroundAlt};
`;

export const TCardTitle = styled(MDBCardTitle)`
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

export const TCardBody = styled(MDBCardBody)`
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

export const TCardText = styled(MDBCardText)`
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

// Contact Components

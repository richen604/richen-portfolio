import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBCollapse, MDBNavbarNav, MDBNavbarItem } from 'mdb-react-ui-kit';
import {
  THireMeButton,
  TNavContainer,
  TNavDivider,
  TNavFooter,
  TNavLink,
  TNavToggle,
} from '../ThemedComponents';
import { THEME } from '../../styled.d';

// TODO Separate Nav / SideNav / Etc

export const SNavContentContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
    height: 100%;
  }

  @media only screen and (min-width: 1000px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

export const SNavLink = styled(TNavLink)`
  @media only screen and (max-width: 1000px) {
    padding-left: 10px;
  }
`;

export const SNavBrand = styled(SNavLink)`
  color: ${props => props.theme.palette.common.white} !important;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-weight: bold;
  padding-top: 10px;
  margin: 10px;
  @media only screen and (max-width: 1000px) {
    margin: 0;
  }
  @media only screen and (min-width: 1000px) {
    margin-top: 0.8rem;
  }
`;

export const SNavBarBrand = styled(SNavLink)`
  color: ${props => props.theme.palette.common.white} !important;
  font-weight: bold;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 640px) {
    margin-right: 20px;
  }
`;

export const SNavProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 1000px) {
  }
  @media only screen and (max-width: 1000px) {
    margin-top: 35px;
  }
`;

export const SNavIntroText = styled.p`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  line-height: 16px;
  font-style: italic;
  margin: 10px;
  font-size: small;
  font-weight: lighter;
`;

export const SNavDivider = styled(TNavDivider)`
  border-radius: 0.5px;
  margin: 10px;
  width: 93%;
  height: 2px;
`;

export const SNavLinkContainerLink = styled(TNavLink)`
  &.navActive {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `color: ${props.theme.palette.common.textMuted} !important;`;
        case THEME.DARK:
          return `color: ${props.theme.palette.primary.main} !important;`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.primary.darker} !important;`;
      }
    }}
  }
  display: inline-grid;
  grid-template-columns: 17px 1fr;
  align-items: center;
  height: auto;
  font-weight: bold;
  margin: 10px;
  text-align: left;
`;

export const SNavIcon = styled(FontAwesomeIcon)`
  position: relative;
  top: 0;
  right: 10px;
`;

export const SUserIcon = styled(SNavIcon)`
  right: 4px;
`;

export const SLaptopIcon = styled(SNavIcon)`
  right: 10px;
`;

export const SFileIcon = styled(SNavIcon)`
  right: 8px;
`;

export const SEnvelopeIcon = styled(SNavIcon)``;

export const SPlaneIcon = styled(SNavIcon)`
  right: 4px;
`;

export const SNavFooter = styled(TNavFooter)`
  font-weight: lighter;
  font-size: smaller;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    font-weight: lighter;
    font-size: smaller;
    margin-top: 10px;
    text-align: center;
  }
  @media only screen and (min-width: 1000px) {
    position: absolute;
    bottom: 0;
  }
`;

export const SNavLinkContainer = styled(MDBNavbarNav)`
  margin: 0;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    padding-left: 65px;
    width: 70%;
    justify-content: space-around;
    align-items: left;
  }
  @media only screen and (min-width: 1000px) {
    width: 160px;
    justify-content: center;
    align-items: center;
  }
`;

export const SHireMeButton = styled(THireMeButton)`
  justify-self: center;
  align-self: center;
  margin: 10px;
  padding: 10px 10px;
  @media only screen and (max-width: 1000px) {
    min-width: 80%;
    min-height: 38px;
    max-width: 80%;
    max-height: 38px;
  }
  @media only screen and (min-width: 1000px) {
    min-width: 175px;
    min-height: 38px;
    max-width: 175px;
    max-height: 38px;
  }
`;

export const SNavContainer = styled(TNavContainer)`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:ital@1&family=Roboto&display=swap');
  margin: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    padding: 10px;
    flex-direction: row;
    align-items: center;
  }
  @media only screen and (min-width: 1000px) {
    padding: 0;
    flex-direction: column;
    align-self: start;
    justify-self: start;
    justify-content: flex-start;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const SNavBarName = styled(MDBNavbarItem)`
  text-align: center;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: smaller;
  padding: 0;
  margin: 2px;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const SNavToggle = styled(TNavToggle)`
  margin: 0px 8px;
  padding: 5px 10px;
  max-width: 36px;
  max-height: 36px;
  &svg {
    font-size: large;
  }
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const SNavBarContainer = styled(MDBCollapse)`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 1000px) {
    display: none;
    z-index: 1 !important;
  }
`;

export const SNavbarLeftContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const SNavBarRightContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 640px) {
    width: 90px;
    margin-right: 10px;
    margin-left: -10px;
  }
`;

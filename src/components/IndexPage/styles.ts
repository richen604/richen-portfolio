import {
  MDBContainer,
  MDBInput,
  MDBTypography,
  MDBIcon,
} from 'mdb-react-ui-kit';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import Image from 'next/image';
import { TTextPrimary } from 'components/Typography';
import { THEME } from 'theme';
import { SPageHeaderContainer } from 'components/pages/styles';
import {
  TButtonPrimary,
  TButtonSecondary,
  TPageMain,
} from '../ThemedComponents';
import { PageMain } from '../pages';

// ! Index Page Styled Components

export const SAboutHeaderIntro = styled(SPageHeaderContainer)`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.palette.common.pageBackgroundAlt};
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

export const SAboutIntroText = styled.div`
  padding-left: 2%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  @media only screen and (max-width: 1000px) {
    padding: 0%;
    margin: 1% 5%;
  }
  @media only screen and (min-width: 1000px) {
    margin: 1% 8%;
  }
`;

export const SAboutContentText = styled(MDBContainer)`
  padding: 50px 90px;
  padding-bottom: 20px;
  margin-top: 100px;
  @media only screen and (max-width: 1000px) {
    padding: 50px 30px;
    margin-top: 50px;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const SAboutContentTitle = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  font-weight: 700;
  @media only screen and (min-width: 1000px) {
    font-size: 3rem;
    margin: 5px 13px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
    margin: 0px 15px;
  }
`;

export const SAboutContentSubtext = styled(TTextPrimary)`
  margin: 25px 16px;
  padding-left: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 0.5vw, 2.5rem);
  line-height: 32px;
  font-weight: 400;
  @media only screen and (max-width: 1000px) {
    line-height: 1.5;
    margin: 25px 10px 0px 10px;
  }
`;

export const SAboutFooter = styled.footer`
  display: flex;
  margin-top: 50px;
  justify-content: end;
  width: 100%;
  font-size: smaller;
  color: white;
`;

export const SAboutFooterText = styled(TTextPrimary)`
  margin-right: 8px;
`;

export const SAboutButtonGroup = styled.div`
  display: flex;
  align-self: center;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 25px 0;
  }

  @media only screen and (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 60%;
    height: auto;
    margin: 50px 0;
  }
`;

export const SAboutHeaderBtnPrimary = styled(TButtonPrimary)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  margin: 20px;
  border-radius: 15px;
  &:hover {
    border-radius: 0;
    scale: 1.03;
  }
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.white} !important; border-color: ${props.theme.palette.common.white} !important; color: ${props.theme.palette.common.black} !important;`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.darker} !important; color: ${props.theme.palette.common.white} !important;`;
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
          return `background-color: ${props.theme.palette.primary.main} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.primary.darkest} !important;`;
        case THEME.LIGHT:
        default:
          return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.darkest} !important; color: ${props.theme.palette.common.white} !important;`;
      }
    }}
  }
`;

export const SAboutHeaderBtnSecondary = styled(TButtonSecondary)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  margin: 20px;
  border-radius: 15px;
  &:hover {
    border-radius: 0;
    scale: 1.03;
  }
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC:
        return `background-color: ${props.theme.palette.common.white} !important; border-color: ${props.theme.palette.common.white} !important; color: ${props.theme.palette.common.black} !important;`;
      case THEME.DARK:
        return `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.darker} !important; color: ${props.theme.palette.common.white} !important;`;
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
          return `background-color: ${props.theme.palette.primary.main} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.primary.darkest} !important;`;
        case THEME.LIGHT:
        default:
          return `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.darkest} !important; color: ${props.theme.palette.common.white} !important;`;
      }
    }}
  }
`;

export const SAboutButtonIcon = styled(MDBIcon)`
  margin: 0 20px 0 0;
`;

export const SAboutButtonText = styled(MDBTypography)`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-right: 35px;
`;

// ! Portfolio Page Styled Components

export const SPortfolioIntro = styled(MDBContainer)`
  padding: 50px 90px;
  padding-bottom: 20px;
  @media only screen and (max-width: 1000px) {
    padding: 50px 30px;
    margin-top: 0px;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const SPortfolioIntroH2 = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  font-weight: 700;
  @media only screen and (min-width: 1000px) {
    font-size: 3rem;
    margin: 5px 13px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
    margin: 0px 15px;
  }
`;

export const SPortfolioIntroText = styled(TTextPrimary)`
  margin: 25px 16px;
  padding-left: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 0.5vw, 2.5rem);
  line-height: 32px;
  font-weight: 400;
  @media only screen and (max-width: 1000px) {
    line-height: 1.5;
    margin: 25px 10px 0px 10px;
  }
`;

// ! Resume Page Styled Components

export const SResumeHeaderContainer = styled(SPageHeaderContainer)`
  padding: 50px 90px;
  padding-bottom: 20px;
  @media only screen and (max-width: 1000px) {
    padding: 50px 30px;
    margin-top: 0px;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const SResumeHeaderH2 = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  font-weight: 700;
  @media only screen and (min-width: 1000px) {
    font-size: 3rem;
    margin: 5px 13px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
    margin: 10px 15px;
  }
`;

export const SResumeContainer = styled(MDBContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  max-width: 1000px;
  margin-bottom: 200px;
  margin-top: 50px;
`;

export const SResume = styled(Image)``;

// ! Contact Page Styled Components

export const SPageMain = styled(PageMain)`
  height: 1200px;
`;

export const SContactHeaderContainer = styled(MDBContainer)`
  padding: 50px 90px;
  padding-bottom: 20px;
  @media only screen and (max-width: 1000px) {
    padding: 50px 30px;
    margin-top: 0px;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const SContactHeaderH2 = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  font-weight: 700;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    font-size: 3rem;
    margin: 5px 5px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
    margin: 10px 15px;
  }
`;

export const SContactHeaderText = styled(TTextPrimary)`
  margin: 25px 16px;
  padding-left: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 0.5vw, 2.5rem);
  line-height: 32px;
  font-weight: 400;
`;

export const SContactContainer = styled(TPageMain)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const SContactH3 = styled(TTextPrimary)`
  font-family: 'Roboto', sans-serif;
  margin-top: 40px;
  text-align: center;
`;

export const SForm = styled.form`
  width: 80%;
  margin-top: 20px;
`;

export const SInputContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return ` color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return ` color: ${props.theme.palette.common.textMuted} !important;`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.common.black} !important;`;
      }
    }}
  }
  :focus-within .form-outline .form-control ~ .form-notch div {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `border-color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
        case THEME.LIGHT:
        default:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
      }
    }}
  }
`;

export const SContactInput = styled(MDBInput)`
  width: 100%;
`;

export const SContactInput1 = styled.div`
  width: 48%;
  height: 80px;
  display: flex;
  flex-direction: column;
`;

export const SContactInputWrapperSubject = styled.div<ThemeProps<DefaultTheme>>`
  min-height: 100px;
  label {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return ` color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return ` color: ${props.theme.palette.common.textMuted} !important;`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.common.black} !important;`;
      }
    }}
  }
  :focus-within .form-outline .form-control ~ .form-notch div {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `border-color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
        case THEME.LIGHT:
        default:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
      }
    }}
  }
`;

export const SContactInputWrapperMessage = styled.div<ThemeProps<DefaultTheme>>`
  min-height: 200px;
  label {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return ` color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return ` color: ${props.theme.palette.common.textMuted} !important;`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.common.black} !important;`;
      }
    }}
  }
  :focus-within .form-outline .form-control ~ .form-notch div {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `border-color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
        case THEME.LIGHT:
        default:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
      }
    }}
  }
`;

export const SContactInputSubject = styled(SContactInput)`
  height: 70px;
`;

export const SContactInputMessage = styled(SContactInput)`
  margin-bottom: 10px;
  margin-top: 30px;
  height: 150px;
`;

export const SContactButton = styled(TButtonPrimary)`
  min-width: 98.2%;
`;

export const SContactError = styled(MDBTypography)`
  margin: 10px 4px;
  color: #ff4066d5;
  font-size: smaller;
`;

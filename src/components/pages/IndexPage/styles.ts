import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBContainer, MDBInput, MDBTypography } from 'mdb-react-ui-kit';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import Image from 'next/image';
import {
  TTextPrimary,
  TButtonPrimary,
  TButtonSecondary,
  TPageMain,
} from '../../ThemedComponents';
import { PageMain } from '..';
import { THEME } from '../../../styled';

// ! Index Page Styled Components

export const SAboutHeaderIntro = styled(MDBContainer)`
  background-color: transparent;
  margin: 30px;
  justify-content: left;
  align-items: left;
`;

export const SAboutIntroH1 = styled(TTextPrimary)`
  text-align: left;
  margin: 5px 13px;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
`;

export const SAboutIntroH5 = styled(TTextPrimary)`
  margin: 5px 15px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  line-height: 36px;
  font-weight: 300;
`;

export const SAboutIntroP = styled(TTextPrimary)`
  margin: 15px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

export const SAboutButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const SAboutContentText = styled(MDBContainer)`
  padding: 50px 90px;
  padding-bottom: 20px;
`;

export const SAboutContentTitle = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 700;
`;

export const SAboutContentSubtext = styled(TTextPrimary)`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
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

export const SAboutHeaderBtnPrimary = styled(TButtonPrimary)`
  width: 144.8px;
  height: 35px;
`;

export const SAboutHeaderBtnSecondary = styled(TButtonSecondary)`
  width: 144.8px;
  height: 35px;
`;

// ! Portfolio Page Styled Components

export const SPortfolioIntro = styled(MDBContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SPortfolioIntroH2 = styled(TTextPrimary)`
  text-align: center;
  margin: 5px 13px;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
`;

export const SPortfolioIntroText = styled(TTextPrimary)`
  text-align: center;
  margin: 15px 16px;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

// ! Resume Page Styled Components

export const SResumeHeaderContainer = styled(MDBContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SResumeHeaderH2 = styled(TTextPrimary)``;

export const SResumeContainer = styled.div`
  object-fit: contain;
  margin: 50px 100px;
  min-width: 300px;
  max-width: 1000px;
  margin-bottom: 200px;
`;

export const SResume = styled(Image)``;

// ! Contact Page Styled Components

export const SPageMain = styled(PageMain)`
  height: 1200px;
`;

export const SContactHeaderContainer = styled(MDBContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SContactHeaderH2 = styled(TTextPrimary)`
  text-align: left;
  margin: 5px 13px;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
`;

export const SContactHeaderText = styled(TTextPrimary)`
  margin: 15px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
`;

export const SContactContainer = styled(TPageMain)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 345px;
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
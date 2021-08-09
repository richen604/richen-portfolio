import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBContainer, MDBBtnGroup } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { changeTheme } from '../reducers/themeReducer';
import { THEME } from '../styled.d';
import { RootState } from '../store';
import { TButtonPrimary, TTextSecondary } from './ThemedComponents';

const SThemeChanger = styled(MDBContainer)<{ isnav: boolean }>`
  min-width: 250px;
  width: 250px;
  background-color: transparent;

  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 640px) {
    display: ${props => (props.isnav ? 'flex' : 'none !important')};
  }
  @media only screen and (min-width: 1000px) {
    display: ${props => (props.isnav ? 'flex' : 'none !important')};
    margin-top: 5px;
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
  }
`;

const SButton = styled(TButtonPrimary)`
  margin: 0;
  min-height: 30px;
  max-width: 80px;
  width: 80px;
  ${props => {
    switch (props.theme.name) {
      case THEME.MONOCHROMATIC: {
        return props.active
          ? `color: ${props.theme.palette.common.black} !important; background-color: #b8b8b8 !important; border-color: #b8b8b8 !important;`
          : `background-color: ${props.theme.palette.common.white} !important; border-color: ${props.theme.palette.common.white} !important; color: ${props.theme.palette.common.black} !important;`;
      }

      case THEME.DARK: {
        return props.active
          ? `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`
          : `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.main} !important; color: ${props.theme.palette.common.white} !important;`;
      }
      case THEME.LIGHT:
      default:
        return props.active
          ? `background-color: ${props.theme.palette.primary.darkest} !important; border-color: ${props.theme.palette.primary.darkest} !important; color: ${props.theme.palette.common.white} !important;`
          : `background-color: ${props.theme.palette.primary.darker} !important; border-color: ${props.theme.palette.primary.darker} !important; color: ${props.theme.palette.common.white} !important;`;
    }
  }}
`;

const SThemeText = styled(TTextSecondary)`
  font-style: italic;

  @media only screen and (min-width: 1000px) {
    margin-bottom: 5px;
  }
`;

interface ThemeChangerProps {
  isnav?: boolean;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({
  isnav,
}: ThemeChangerProps) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state);

  const handleThemeChange = evt => {
    dispatch(changeTheme(evt.target.value));
  };

  return (
    <SThemeChanger isnav={isnav}>
      {isnav && (
        <SThemeText variant="p">pssst... select a theme here</SThemeText>
      )}
      <MDBBtnGroup>
        <SButton
          active={theme.name === THEME.LIGHT}
          id="theme-light"
          value={THEME.LIGHT}
          onClick={evt => handleThemeChange(evt)}
        >
          Light
        </SButton>
        <SButton
          active={theme.name === THEME.DARK}
          id="theme-dark"
          value={THEME.DARK}
          onClick={evt => handleThemeChange(evt)}
        >
          Dark
        </SButton>
        <SButton
          active={theme.name === THEME.MONOCHROMATIC}
          id="theme-light"
          value={THEME.MONOCHROMATIC}
          onClick={evt => handleThemeChange(evt)}
        >
          Mono
        </SButton>
      </MDBBtnGroup>
    </SThemeChanger>
  );
};

ThemeChanger.defaultProps = {
  isnav: false,
};

export default ThemeChanger;

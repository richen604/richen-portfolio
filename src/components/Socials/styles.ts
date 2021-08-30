import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBIcon,
  MDBDropdownMenu,
} from 'mdb-react-ui-kit';
import styled, { keyframes } from 'styled-components';
import {
  TButtonPrimary,
  TSocialsBorder,
  TSocialsIcon,
} from '../ThemedComponents';
import { SocialsProp } from './types';

export const SSocialsContainer = styled.div<SocialsProp>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: auto;

  margin: 15px 1px;
  @media only screen and (max-width: 1000px) {
    max-width: 400px;
    width: 400px;
  }
  @media only screen and (min-width: 1000px) {
    max-width: ${props => (props.isnav ? '200px' : '320px')};
    width: ${props => (props.isnav ? '200px' : '320px')};
  }
`;

export const SSocialsBorder = styled(TSocialsBorder)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin: 5px 5px;
  background-color: white;
  z-index: 0;
`;

export const SSocialsIcon = styled(TSocialsIcon)`
  font-size: larger;
  margin: 3px 3px;
  z-index: 1;
`;

export const SSocialsCollapsed = styled.div`
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconTransition = keyframes`
from {
  transform: translateX(50px);
}
to {
  transform: translateX(0);
}
`;

export const SSocialsDropRight = styled(MDBDropdown)`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  animation: ${IconTransition} 0.5s ease-in-out both;
  top: 83px;
  left: 0;
  color: white;
  z-index: 100;
  box-shadow: none;
  &:hover {
    color: lightgray !important;
    box-shadow: none;
  }
  :hover {
    color: lightgray !important;
  }
`;

export const SSocialsCollapsedToggle = styled(MDBDropdownToggle)`
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  max-width: 28px;
  max-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  color: black;
  &:active {
    background-color: transparent;
  }
  &:after {
    font-size: larger;
    position: fixed;
    animation: ${IconTransition} 0.5s ease-in-out both;
    top: 10px;
    left: 38px;
    color: white;
    margin-left: 10px;
    z-index: 100;
    &:hover {
      color: lightgray !important;
    }
  }
`;

export const SSocialsNewIcon = styled(MDBIcon)``;

export const SSocialsNewBtn = styled(TButtonPrimary)`
  width: 35px;
  height: 35px;
  min-width: 35px;
  min-height: 35px;
  max-width: 35px;
  max-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 4px;
  box-shadow: none;
`;

export const SSocialsCollapsedIcon = styled(MDBIcon)`
  color: white;
  width: 100%;
  margin-right: 2px;
  :hover {
    color: lightgray !important;
  }
`;

export const SSocialsDropRightMenu = styled(MDBDropdownMenu)`
  max-width: 50px;
  width: 50px;
  margin: -18px 10px;
  background-color: transparent;
  z-index: 100000;
  box-shadow: none;
`;

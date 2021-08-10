import styled from 'styled-components';
import { TSocialsBorder, TSocialsIcon } from '../ThemedComponents';
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
    max-width: ${props => (props.isnav ? '200px' : '400px')};
    width: ${props => (props.isnav ? '200px' : '400px')};
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

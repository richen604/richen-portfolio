import React from 'react';
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  MDBDropdown,
  MDBIcon,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { TOutBoundLink } from '../ThemedComponents';
import { SSocialsContainer, SSocialsBorder, SSocialsIcon } from './styles';
import { SocialsProp } from './types';
import { siteMetadata } from '../../constants';

// TODO ADD Socials menu

const SSocialsCollapsed = styled.div`
  width: 50px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SSocialsDropRight = styled(MDBDropdown)`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 70px;
  left: 0;
  color: white;
  z-index: 100;
`;

const SSocialsCollapsedToggle = styled(MDBDropdownToggle)`
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  max-width: 28px;
  max-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white !important;
  color: black;
  &:active {
    background-color: white;
  }
  &:hover {
    background-color: gray !important;
  }
  &:after {
    font-size: larger;
    position: fixed;
    top: 81px;
    left: 38px;
    color: white;
    margin-left: 10px;
    z-index: 100;
  }
`;

const SSocialsCollapsedIcon = styled(MDBIcon)`
  color: black;
  margin-right: 0px;
`;

const SSocialsDropRightMenu = styled(MDBDropdownMenu)`
  max-width: 50px;
  width: 50px;
  margin: -23px 10px;
  background-color: transparent;
  z-index: 100000;
`;

// TODO Add Tooltips

const Socials: React.FC<SocialsProp> = ({ isnav, collapsed }: SocialsProp) => {
  if (collapsed) {
    return (
      <SSocialsCollapsed>
        <SSocialsDropRight dropright group>
          <SSocialsCollapsedToggle floating>
            <SSocialsCollapsedIcon fab icon="github" size="2x" />
          </SSocialsCollapsedToggle>
          <SSocialsDropRightMenu>
            <Socials />
          </SSocialsDropRightMenu>
        </SSocialsDropRight>
      </SSocialsCollapsed>
    );
  }
  return (
    <SSocialsContainer isnav={isnav}>
      <TOutBoundLink
        eventLabel="outbound-github"
        to={siteMetadata.socials.github}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faGithub} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        eventLabel="outbound-linkedin"
        to={siteMetadata.socials.linkedin}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faLinkedin} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        eventLabel="outbound-medium"
        to={siteMetadata.socials.medium}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faMediumM} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        eventLabel="outbound-stackoverflow"
        to={siteMetadata.socials.stackoverflow}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faStackOverflow} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        eventLabel="outbound-codepen"
        to={siteMetadata.socials.codepen}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faCodepen} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        eventLabel="outbound-twitter"
        to={siteMetadata.socials.twitter}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faTwitter} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        eventLabel="outbound-instagram"
        to={siteMetadata.socials.instagram}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faInstagram} />
        </SSocialsBorder>
      </TOutBoundLink>
    </SSocialsContainer>
  );
};

Socials.defaultProps = {
  isnav: false,
  collapsed: false,
};

export default Socials;

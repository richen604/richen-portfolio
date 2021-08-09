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
import styled from 'styled-components';
import {
  TSocialsBorder,
  TSocialsIcon,
  TOutBoundLink,
} from './ThemedComponents';
import { siteMetadata } from '../constants';

interface SocialsProp {
  isnav?: boolean;
}
const SSocialsContainer = styled.div<SocialsProp>`
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

const SSocialsBorder = styled(TSocialsBorder)`
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

const SSocialsIcon = styled(TSocialsIcon)`
  font-size: larger;
  margin: 3px 3px;
  z-index: 1;
`;

const Socials: React.FC<SocialsProp> = ({ isnav }: SocialsProp) => (
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

Socials.defaultProps = {
  isnav: false,
};

export default Socials;

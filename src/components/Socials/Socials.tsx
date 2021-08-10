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
import { TOutBoundLink } from '../ThemedComponents';
import { SSocialsContainer, SSocialsBorder, SSocialsIcon } from './styles';
import { SocialsProp } from './types';
import { siteMetadata } from '../../constants';

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

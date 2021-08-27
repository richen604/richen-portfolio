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
import {
  SSocialsContainer,
  SSocialsBorder,
  SSocialsIcon,
  SSocialsCollapsed,
  SSocialsCollapsedIcon,
  SSocialsCollapsedToggle,
  SSocialsDropRight,
  SSocialsDropRightMenu,
  SSocialsNewBtn,
  SSocialsNewIcon,
} from './styles';
import { SocialsProp } from './types';
import { siteMetadata } from '../../constants';

// TODO ADD Socials menu

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
            <SSocialsContainer isnav={isnav}>
              <TOutBoundLink
                target="_blank"
                eventLabel="outbound-github"
                to={siteMetadata.socials.github}
              >
                <SSocialsNewBtn floating>
                  <SSocialsNewIcon fab icon="github" size="2x" />
                </SSocialsNewBtn>
              </TOutBoundLink>
              <TOutBoundLink
                target="_blank"
                eventLabel="outbound-linkedin"
                to={siteMetadata.socials.linkedin}
              >
                <SSocialsNewBtn floating>
                  <SSocialsNewIcon fab icon="linkedin" size="2x" />
                </SSocialsNewBtn>
              </TOutBoundLink>
              <TOutBoundLink
                target="_blank"
                eventLabel="outbound-medium"
                to={siteMetadata.socials.medium}
              >
                <SSocialsNewBtn floating>
                  <SSocialsNewIcon fab icon="medium" size="2x" />
                </SSocialsNewBtn>
              </TOutBoundLink>
              <TOutBoundLink
                target="_blank"
                eventLabel="outbound-stackoverflow"
                to={siteMetadata.socials.stackoverflow}
              >
                <SSocialsNewBtn floating>
                  <SSocialsNewIcon fab icon="stack-overflow" size="2x" />
                </SSocialsNewBtn>
              </TOutBoundLink>
              <TOutBoundLink
                target="_blank"
                eventLabel="outbound-codepen"
                to={siteMetadata.socials.codepen}
              >
                <SSocialsNewBtn floating>
                  <SSocialsNewIcon fab icon="codepen" size="2x" />
                </SSocialsNewBtn>
              </TOutBoundLink>
              <TOutBoundLink
                target="_blank"
                eventLabel="outbound-twitter"
                to={siteMetadata.socials.twitter}
              >
                <SSocialsNewBtn floating>
                  <SSocialsNewIcon fab icon="twitter" size="2x" />
                </SSocialsNewBtn>
              </TOutBoundLink>
              <TOutBoundLink
                target="_blank"
                eventLabel="outbound-instagram"
                to={siteMetadata.socials.instagram}
              >
                <SSocialsNewBtn floating>
                  <SSocialsNewIcon fab icon="instagram" size="2x" />
                </SSocialsNewBtn>
              </TOutBoundLink>
            </SSocialsContainer>
          </SSocialsDropRightMenu>
        </SSocialsDropRight>
      </SSocialsCollapsed>
    );
  }
  return (
    <SSocialsContainer isnav={isnav}>
      <TOutBoundLink
        target="_blank"
        eventLabel="outbound-github"
        to={siteMetadata.socials.github}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faGithub} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        target="_blank"
        eventLabel="outbound-linkedin"
        to={siteMetadata.socials.linkedin}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faLinkedin} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        target="_blank"
        eventLabel="outbound-medium"
        to={siteMetadata.socials.medium}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faMediumM} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        target="_blank"
        eventLabel="outbound-stackoverflow"
        to={siteMetadata.socials.stackoverflow}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faStackOverflow} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        target="_blank"
        eventLabel="outbound-codepen"
        to={siteMetadata.socials.codepen}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faCodepen} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        target="_blank"
        eventLabel="outbound-twitter"
        to={siteMetadata.socials.twitter}
      >
        <SSocialsBorder>
          <SSocialsIcon icon={faTwitter} />
        </SSocialsBorder>
      </TOutBoundLink>
      <TOutBoundLink
        target="_blank"
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

import React from 'react';
import PageHeader from 'components/pages/PageHeader';
import ProjectCardGroup from 'components/ProjectCardGroup';
import { PageMain } from 'components/pages';
import {
  TOutboundLinkText,
  TNextLinkWrapper,
  TLink,
} from 'components/ThemedComponents';
import FadeInWhenVisable from 'components/FadeInWhenVisable';
import { siteMetadata } from '../../constants';
import {
  SPortfolioIntro,
  SPortfolioIntroH2,
  SPortfolioIntroText,
} from './styles';

function Portfolio() {
  return (
    <>
      <PageHeader id="portfolio">
        <FadeInWhenVisable>
          <SPortfolioIntro>
            <SPortfolioIntroH2>Portfolio</SPortfolioIntroH2>
            <SPortfolioIntroText>
              Welcome to my portfolio. All of these projects can be seen on my
              github{' '}
              <TOutboundLinkText
                eventLabel="outbound-github"
                to={siteMetadata.socials.github}
              >
                here
              </TOutboundLinkText>
              .<br />
              If you want and application or website similar to what you see,
              feel free to contact me{' '}
              <TNextLinkWrapper href="/contact" Component={TLink}>
                here
              </TNextLinkWrapper>
              .
            </SPortfolioIntroText>
          </SPortfolioIntro>
        </FadeInWhenVisable>
      </PageHeader>
      <PageMain>
        <FadeInWhenVisable>
          <ProjectCardGroup />
        </FadeInWhenVisable>
      </PageMain>
    </>
  );
}

export default Portfolio;

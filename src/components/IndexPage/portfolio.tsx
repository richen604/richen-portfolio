import { PageMain } from 'components/pages';
import PageHeader from 'components/pages/PageHeader';
import ProjectCardGroup from 'components/ProjectCardGroup';
import {
  TLink,
  TNextLinkWrapper,
  TOutboundLinkText,
} from 'components/ThemedComponents';
import React from 'react';
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
        <SPortfolioIntro>
          <SPortfolioIntroH2>Portfolio</SPortfolioIntroH2>
          <SPortfolioIntroText note>
            Welcome to my portfolio. All of these projects can be seen on my
            github{' '}
            <TOutboundLinkText
              target="_blank"
              eventLabel="outbound-github"
              to={siteMetadata.socials.github}
            >
              here
            </TOutboundLinkText>
            .<br />
            If you want and application or website similar to what you see, feel
            free to contact me{' '}
            <TNextLinkWrapper href="#contact" Component={TLink}>
              here
            </TNextLinkWrapper>
            .
          </SPortfolioIntroText>
        </SPortfolioIntro>
      </PageHeader>
      <PageMain>
        <ProjectCardGroup />
      </PageMain>
    </>
  );
}

export default Portfolio;

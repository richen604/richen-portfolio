import React from 'react';

import { MDBContainer } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ProjectCardGroup from '../components/ProjectCardGroup';
import PageMain from '../components/PageMain';
import {
  TTextPrimary,
  TLocalLink,
  TOutboundLinkText,
} from '../components/ThemedComponents';
import { siteMetadata } from '../constants';

const SPortfolioIntro = styled(MDBContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SPortfolioIntroH2 = styled(TTextPrimary)`
  text-align: center;
  margin: 5px 13px;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
`;

const SPortfolioIntroText = styled(TTextPrimary)`
  text-align: center;
  margin: 15px 16px;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <PageHeader>
        <SPortfolioIntro>
          <SPortfolioIntroH2>Portfolio</SPortfolioIntroH2>
          <SPortfolioIntroText>
            Welcome to my portfolio. All of these projects can be seen on my
            github{' '}
            <TOutboundLinkText href={siteMetadata.socials.github}>
              here
            </TOutboundLinkText>
            .<br />
            If you want and application or website similar to what you see, feel
            free to contact me <TLocalLink href="/contact">here</TLocalLink>.
          </SPortfolioIntroText>
        </SPortfolioIntro>
      </PageHeader>
      <PageMain>
        <ProjectCardGroup />
      </PageMain>
    </Layout>
  );
}

export default Portfolio;

import React from 'react';
import PageHeader from '../components/Page/PageHeader';
import SEO from '../components/Seo';
import Particle from '../components/Particle';
import { PageMain } from '../components/Page';

const particle = () => (
  <>
    <SEO title="Particle" />
    <PageHeader />
    <PageMain>
      <Particle />
    </PageMain>
  </>
);

export default particle;

import React from 'react';
import PageHeader from '../components/pages/PageHeader';
import SEO from '../components/Seo';
import Particle from '../components/Particle';
import { PageMain } from '../components/pages';

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

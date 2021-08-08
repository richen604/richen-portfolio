import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/Seo';
import Particle from '../components/Particle';
import PageMain from '../components/PageMain';

interface Props {}

const particle = (props: Props) => (
  <>
    <SEO title="Particle" />
    <PageHeader />
    <PageMain>
      <Particle />
    </PageMain>
  </>
);

export default particle;

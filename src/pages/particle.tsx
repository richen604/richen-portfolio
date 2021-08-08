import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SEO from '../components/Seo';
import Particle from '../components/Particle';
import PageMain from '../components/PageMain';

interface Props {}

const particle = (props: Props) => {
  return (
    <Layout>
      <SEO title="Particle" />
      <PageHeader />
      <PageMain>
        <Particle />
      </PageMain>
    </Layout>
  );
};

export default particle;

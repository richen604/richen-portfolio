import React from 'react';
import Layout from '../components/Layout';
import PocketFeed from '../components/PocketFeed';
import SEO from '../components/Seo';

interface Props {}
const pocket = (props: Props) => {
  return (
    <Layout>
      <SEO title="Pocket" />
      <PocketFeed />
    </Layout>
  );
};

export default pocket;

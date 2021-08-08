import React from 'react';
import PocketFeed from '../components/PocketFeed';
import SEO from '../components/Seo';

interface Props {}
const pocket = (props: Props) => (
  <>
    <SEO title="Pocket" />
    <PocketFeed />
  </>
);

export default pocket;

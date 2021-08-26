import React from 'react';
import AnimatedPageHeader from '../components/AnimatedPageHeader';
import { PageMain } from '../components/pages';
import SEO from '../components/Seo';

const animate = () => (
  <>
    <SEO title="Animate" />

    <PageMain>
      <AnimatedPageHeader />
    </PageMain>
  </>
);

export default animate;

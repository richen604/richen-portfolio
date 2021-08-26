import React from 'react';
import AnimatedPageHeader from '../components/AnimatedPageHeader';
import { PageMain } from '../components/pages';
import SEO from '../components/Seo';

interface Props {}

const animate = (props: Props) => (
  <>
    <SEO title="Animate" />

    <PageMain>
      <AnimatedPageHeader />
    </PageMain>
  </>
);

export default animate;

import React from 'react';
import AnimatedPageHeader from '../components/AnimatedPageHeader';
import NoSsr from '../components/NoSsr';
import { PageMain } from '../components/Page';
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

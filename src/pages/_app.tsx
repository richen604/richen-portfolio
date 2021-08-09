/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { AppProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '../utils/analytics';
import configureStore from '../store';
import Layout from '../layouts/Layout';

interface MyAppProps extends AppProps {
  Component: {
    Layout?: React.ExoticComponent<{
      children?: React.ReactNode;
    }>;
  } & NextComponentType<NextPageContext, any, {}>;
}

export default function App({ Component, pageProps }: MyAppProps) {
  const router = useRouter();
  const [isGaLoaded, setIsGaLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === undefined) return;

    const handleRouteChange = url => {
      logPageView(url);
    };

    if (!isGaLoaded) {
      initGA();
      setIsGaLoaded(true);
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    // eslint-disable-next-line consistent-return
    return () => {
      if (typeof window === undefined) return;
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [isGaLoaded, router.events]);

  const { store } = configureStore();

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

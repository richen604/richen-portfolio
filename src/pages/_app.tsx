/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { AppProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import { Provider } from 'react-redux';
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
  const { store } = configureStore();

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

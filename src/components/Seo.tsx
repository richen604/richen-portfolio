/* eslint-disable @next/next/no-page-custom-font */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { siteMetadata } from '../constants';

interface ISEO {
  description?: string;
  lang?: string;
  meta?: Array<any>;
  title?: string;
}

const SEO: React.FC<ISEO> = ({ description, lang, meta, title }: ISEO) => {
  const metaDescription = description || siteMetadata.description;
  const defaultTitle = siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: siteMetadata.image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata?.author?.name || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: siteMetadata.image,
        },
      ].concat(meta)}
    >
      <link rel="icon" href="/favicon.png" />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: 'About Me',
};

export default SEO;

import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../static-queries/useSiteMetadata';

export interface SEOProps {
  description?: string,
  lang?: string,
  meta?: Array<{
    name: string;
    content: any;
    property?: undefined;
  } | {
    property: string;
    content: any;
    name?: undefined; }>,
  title: string,
}
function SEO({
  description, lang = 'en', meta = [], title,
}: SEOProps): ReactElement {
  const siteMetadata = useSiteMetadata();
  const metaDescription = description || siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.infoData.contact.twitter_handle,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

export default SEO;

import React from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import useSiteMetadata from '../static-queries/useSiteMetadata';

const SecondPage: React.FC<PageProps<null>> = () => {
  const metaData = useSiteMetadata();

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>{metaData.infoData.description}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;

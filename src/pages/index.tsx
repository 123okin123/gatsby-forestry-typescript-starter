import { PageProps } from 'gatsby';
import React from 'react';
import BlogList from '../components/blog-list/blog-list';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const IndexPage: React.FC<PageProps<null>> = () => (
  <Layout>
    <SEO title="Home" />

    <section className="py-12">
      <BlogList />
    </section>

  </Layout>
);

export default IndexPage;

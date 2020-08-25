import { Link, PageProps } from 'gatsby';
import React from 'react';
import BlogList from '../components/blog-list/blog-list';
import Button from '../components/button/button';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const IndexPage: React.FC<PageProps<null>> = () => (
  <Layout>
    <SEO title="Home" />

    <section>
      <BlogList />
    </section>

    <Button>Button</Button>
    <Link to="/page-2/">Page 2</Link>
  </Layout>
);

export default IndexPage;

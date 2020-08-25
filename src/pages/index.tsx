import React from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image/image';
import SEO from '../components/seo';
import Button from '../components/button/button';
import Hero from '../components/hero/hero';
import BlogList from '../components/blog-list/blog-list';

const IndexPage: React.FC<PageProps<null>> = () => (
  <Layout hideHeader>
    <SEO title="Home" />

    <Hero />

    <section>
      <BlogList />
    </section>

    <Button>Button</Button>
    <Link to="/page-2/">Page 2</Link>
  </Layout>
);

export default IndexPage;

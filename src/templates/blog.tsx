import { graphql, Link, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React, { ReactElement } from 'react';
import Layout from '../components/layout/layout';
import useBlogData from '../static-queries/useBlogData';
import blogTemplateStyles from './blog.module.scss';

export default function Blog({ data }: PageProps<{markdownRemark: any}>): ReactElement {
  const md = data.markdownRemark;
  const allBlogData = useBlogData();

  function getNextSlug(slug: string) {
    const allSlugs = allBlogData.map((blog: any) => blog.node.fields.slug);
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1];
    if (nextSlug !== undefined && nextSlug !== '') {
      return nextSlug;
    }
    return allSlugs[0];
  }

  const nextSlug = getNextSlug(md.fields.slug);

  return (
    <Layout>

      <article className={blogTemplateStyles.blog}>
        <figure className={blogTemplateStyles.blog__hero}>
          <Img
            fluid={md.frontmatter.hero_image.childImageSharp.fluid}
            alt={md.frontmatter.title}
            style={{ height: '100%' }}
          />
        </figure>
        <div className={blogTemplateStyles.blog__info}>
          <h1>{md.frontmatter.title}</h1>
          <h3>{md.frontmatter.date}</h3>
        </div>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: md.html }}
        />
        <div className={blogTemplateStyles.blog__footer}>
          <h2>
            Written By:
            {' '}
            {md.frontmatter.author}
          </h2>
          <Link to={`/blog/${nextSlug}`} className={blogTemplateStyles.footer__next}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26">
              <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z" />
            </svg>
          </Link>
        </div>
      </article>
    </Layout>
  );
}

// dynamic page query, must occur within each post context
// $slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;

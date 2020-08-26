import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { ReactElement } from 'react';
import useBlogData from '../../static-queries/useBlogData';
import blogListStyles from './blog-list.module.scss';

export default function BlogList(): ReactElement {
  const blogData = useBlogData();

  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter((blog) => blog.node?.frontmatter?.title !== '')
          .map((blog) => (
            <Link to={`/blog/${blog.node.fields?.slug}`} key={blog.node.id}>
              <li className={blogListStyles.li} key={blog.node.fields?.slug}>
                <div className={blogListStyles.list__hero}>
                  {blog.node.frontmatter?.hero_image?.childImageSharp?.fluid && (
                    <Img
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />
                  )}
                </div>
                <div className={blogListStyles.list__info}>
                  <h2>{blog.node.frontmatter?.title}</h2>
                  <h3>{blog.node.frontmatter?.date}</h3>
                  <p>{blog.node.excerpt}</p>
                </div>
              </li>
            </Link>
          ))}
      </div>
    );
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  );
}

/* eslint-disable camelcase */
import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetaData {

  title: string;
  description: string;
  repoUrl: string;
  infoData: {
    contact: {
      email: string;
      github_handle: string;
      twitter_handle: string;
    }
    cta: string;
    description: string;
    background_color: string;
  }
  menu: {
    name: string;
    link: string;
  }[]
}

export default function useSiteMetadata(): SiteMetaData {
  const data = useStaticQuery<{site: {siteMetadata: SiteMetaData}}>(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          repoUrl
          infoData {
            contact {
              email
              github_handle
              twitter_handle
            }
            cta
            description
            background_color
          }
          menu {
            name
            link
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
}

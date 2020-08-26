import React, { ReactElement } from 'react';
import Helmet from 'react-helmet';
import Header from '../header/header';
import useSiteMetadata from '../../static-queries/useSiteMetadata';
import layoutStyles from './layout.module.scss';

export interface LayoutProps {
  bgColor?: string,
  children: ReactElement[] | ReactElement
  hideHeader?: boolean
}

export default function Layout({
  bgColor, children, hideHeader,
}: LayoutProps): ReactElement {
  const { title, description } = useSiteMetadata();
  return (
    <>
      {!hideHeader && <Header />}
      <section
        className="container mx-auto"
      >
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        <div>{children}</div>
      </section>
    </>
  );
}

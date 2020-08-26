import React, { ReactElement } from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../../static-queries/useSiteMetadata';
import Header from '../header/header';

export interface LayoutProps {
  bgColor?: string,
  children: ReactElement[] | ReactElement
  hideHeader?: boolean
}

export default function Layout({
  children, hideHeader,
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

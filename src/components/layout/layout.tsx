import React, { ReactElement } from 'react';
import Helmet from 'react-helmet';
import Header from '../header/header';
import useSiteMetadata from '../../static-queries/useSiteMetadata';
import layoutStyles from './layout.module.scss';

export interface LayoutProps {
  page?: string,
  bgColor?: string,
  children: ReactElement[] | ReactElement
  hideHeader?: boolean
}

export default function Layout({
  page, bgColor, children, hideHeader,
}: LayoutProps): ReactElement {
  const { title, description } = useSiteMetadata();
  return (
    <section
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      {!hideHeader && <Header />}
      <div>{children}</div>
    </section>
  );
}

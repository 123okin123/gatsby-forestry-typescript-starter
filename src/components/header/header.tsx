import { Link } from 'gatsby';
import React, { ReactElement } from 'react';
import useSiteMetadata from '../../static-queries/useSiteMetadata';

const Header = (): ReactElement => {
  const { menu } = useSiteMetadata();
  return (
    <header>
      <nav>
        <ul>
          {menu.map((entry) => <li><Link to={entry.link}>{entry.name}</Link></li>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

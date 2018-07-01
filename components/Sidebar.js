import * as React from 'react';

import styles from './Sidebar.css';
import linkStyles from '../css/link.css';

const MenuItem = ({ href, title }) => {
  return (
    <li>
      {window.location.pathname === href ? '> ' : ''}
      <a className={linkStyles.link} href={href}>
        {title}
      </a>
    </li>
  );
};

export const Sidebar = ({ onClick }) => (
  <div id={styles['sidebar']}>
    <h2 id={styles['sidebar-title']}>POP PRODUCT DESIGN</h2>
    <ul className={styles['sidebar-menu']}>
      <MenuItem href="/" title="Home" />
    </ul>

    <ul className={styles['sidebar-menu']}>
      <h6>Principles</h6>
      <MenuItem href="/colours" title="Colour palette" />
      <MenuItem href="/typography" title="Typography" />
      <MenuItem href="/language" title="Language and text" />
      <MenuItem href="/navigation" title="Navigation" />
      <MenuItem href="/animation" title="Animation" />
    </ul>

    <ul className={styles['sidebar-menu']}>
      <h6>Components</h6>
      <MenuItem href="/icons_and_media" title="Icons and media" />
      <MenuItem href="/forms" title="Form elements" />
      <MenuItem href="/buttons" title="Buttons and links" />
      <MenuItem href="/tables" title="Tables and lists" />
      <MenuItem href="/case_headers" title="Case headers" />
      <MenuItem href="/content_containers" title="Content containers" />
      <MenuItem href="/notifications" title="Notifications" />
    </ul>
    <ul className={styles['sidebar-menu']}>
      <h6>Other</h6>
      <MenuItem href="/theme" title="Theme builder" />
    </ul>
  </div>
);

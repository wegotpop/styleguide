import * as React from 'react';

import styles from './Sidebar.css';
import { MenuItem } from './MenuItem';

export const Sidebar = ({ onClick }) => (
  <div id={styles['sidebar']}>
    <h2 id={styles['sidebar-title']}>POP PRODUCT DESIGN</h2>
    <ul className={styles['sidebar-menu']}>
      <MenuItem onClick={onClick} href="/" title="Home" />
    </ul>

    <ul className={styles['sidebar-menu']}>
      <h4>Principles</h4>
      <MenuItem onClick={onClick} href="/colours" title="Colour palette" />
      <MenuItem onClick={onClick} href="/typography" title="Typography" />
      <MenuItem onClick={onClick} href="/language" title="Language and text" />
      <MenuItem onClick={onClick} href="/microcopy" title="Microcopy" />
      <MenuItem onClick={onClick} href="/navigation" title="Navigation" />
      <MenuItem onClick={onClick} href="/animation" title="Animation" />
    </ul>

    <ul className={styles['sidebar-menu']}>
      <h4>Components</h4>
      <MenuItem
        onClick={onClick}
        href="/navigation-pages"
        title="Navigation pages"
      />
      <MenuItem
        onClick={onClick}
        href="/icons_and_media"
        title="Icons and media"
      />
      <MenuItem onClick={onClick} href="/page-headings" title="Page headings" />
      <MenuItem onClick={onClick} href="/forms" title="Form elements" />
      <MenuItem onClick={onClick} href="/buttons" title="Buttons and links" />
      <MenuItem onClick={onClick} href="/badges" title="Badges" />
      <MenuItem onClick={onClick} href="/fast-links" title="Fast links" />
      <MenuItem onClick={onClick} href="/tables" title="Tables and lists" />
      <MenuItem onClick={onClick} href="/case-headers" title="Case headers" />
      <MenuItem
        onClick={onClick}
        href="/content-containers"
        title="Content containers (Panels)"
      />
      <MenuItem onClick={onClick} href="/notifications" title="Notifications" />
    </ul>
    <ul className={styles['sidebar-menu']}>
      <h4>Other</h4>
      <MenuItem onClick={onClick} href="/theme" title="Theme builder" />
    </ul>
  </div>
);

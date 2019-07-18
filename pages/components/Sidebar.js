import * as React from 'react';

import styles from './Sidebar.css';
import { MenuItem } from './MenuItem';

export const Sidebar = ({ onClick }) => (
  <div id={styles['sidebar']}>
    <h2 id={styles['sidebar-title']}>POP STYLE GUIDE</h2>
    <ul className={styles['sidebar-menu']}>
      <MenuItem onClick={onClick} href="/" title="Home" />
    </ul>

    <ul className={styles['sidebar-menu']}>
      <h4>Principles</h4>
      <MenuItem onClick={onClick} href="/ux-principles" title="UX Principles" />
    </ul>

    <ul className={styles['sidebar-menu']}>
      <h4>Guidelines</h4>
      <br />
      <h5>Colours</h5>
      <MenuItem onClick={onClick} href="/colours" title="Colour Palette" />
      <MenuItem title="Using Colours" />
      <h5>Text</h5>
      <MenuItem onClick={onClick} href="/typography" title="Typography" />
      <MenuItem onClick={onClick} href="/language" title="Language and text" />
      <MenuItem onClick={onClick} href="/microcopy" title="Microcopy" />
      <MenuItem onClick={onClick} href="/navigation" title="Navigation" />
      {/*<MenuItem onClick={onClick} href="/animation" title="Animation" />*/}
    </ul>

    <ul className={styles['sidebar-menu']}>
      <h4>Components</h4>
      <br />
      <h5>Navigation</h5>
      <MenuItem onClick={onClick} href="/navigation" title="Navigation Bar" />
      <MenuItem
        onClick={onClick}
        href="/navigation-pages"
        title="Navigation Pages"
      />
      <MenuItem title="Breadcrumbs" />
      <MenuItem title="Pagination" />
      <h5>Layout</h5>
      <MenuItem
        onClick={onClick}
        href="/device-breakpoints"
        title="Device Breakpoints"
      />
      <MenuItem onClick={onClick} href="/widget-pages" title="Widget pages" />
      <h5>Headers</h5>
      <MenuItem onClick={onClick} href="/page-headings" title="Page Headings" />
      <MenuItem onClick={onClick} href="/case-headers" title="Case Headers" />
      <MenuItem onClick={onClick} href="/page-text" title="Page Text" />
      <MenuItem
        onClick={onClick}
        href="/fast-links"
        title="Fast Links and Tabs"
      />
      <h5>Elements</h5>
      <MenuItem onClick={onClick} href="/content-containers" title="Panels" />
      <MenuItem onClick={onClick} href="/buttons" title="Buttons and Links" />
      <MenuItem onClick={onClick} href="/tables" title="Tables and lists" />
      <MenuItem onClick={onClick} href="/forms" title="Forms" />
      <MenuItem
        onClick={onClick}
        href="/icons_and_media"
        title="Icons and media"
      />
      <MenuItem onClick={onClick} href="/badges" title="Badges" />
      <MenuItem onClick={onClick} href="/notifications" title="Notifications" />
    </ul>
    <ul className={styles['sidebar-menu']}>
      <h4>Other</h4>
      <MenuItem onClick={onClick} href="/theme" title="Theme builder" />
    </ul>
  </div>
);

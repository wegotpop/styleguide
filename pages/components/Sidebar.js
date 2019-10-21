import * as React from 'react';

import styles from './Sidebar.css';
import { MenuItem } from './MenuItem';

export const Sidebar = ({ onClick }) => (
  <div id={styles['sidebar']}>
    <div id={styles['sidebar-title']}>
      <h1>POP STYLE GUIDE</h1>
    </div>
    <ul className={styles['sidebar-menu']}>
      <MenuItem onClick={onClick} href="/" title="Home" />
    </ul>
    <hr />

    <ul className={styles['sidebar-menu']}>
      <h4>
        <strong>Principles</strong>
      </h4>
      <MenuItem onClick={onClick} href="/ux-principles" title="UX Principles" />
    </ul>
    <hr />

    <ul className={styles['sidebar-menu']}>
      <h4>
        <strong>Style Guidelines</strong>
      </h4>
      <h5>Colours</h5>
      <MenuItem onClick={onClick} href="/colours" title="Colour Palette" />
      <MenuItem onClick={onClick} href="/colour-use" title="Using Colours" />
      <br />
      <h5>Text</h5>
      <MenuItem onClick={onClick} href="/typography" title="Typography" />
      <MenuItem onClick={onClick} href="/language" title="Language and text" />
      <MenuItem onClick={onClick} href="/microcopy" title="Microcopy" />
      {/*<MenuItem onClick={onClick} href="/animation" title="Animation" />*/}
    </ul>
    <hr />

    <ul className={styles['sidebar-menu']}>
      <h4>
        <strong>Components</strong>
      </h4>
      <h5>Navigation</h5>
      <MenuItem
        onClick={onClick}
        href="/navigation-bar"
        title="Navigation Bar"
      />
      <MenuItem
        onClick={onClick}
        href="/navigation-pages"
        title="Navigation Pages"
      />
      <MenuItem onClick={onClick} href="/breadcrumbs" title="Breadcrumbs" />
      <MenuItem title="Pagination" />
      <br />
      <h5>Layout</h5>
      <MenuItem
        onClick={onClick}
        href="/device-breakpoints"
        title="Device Breakpoints"
      />
      <MenuItem onClick={onClick} href="/widget-pages" title="Widget pages" />
      <br />
      <h5>Headers</h5>
      <MenuItem onClick={onClick} href="/page-headings" title="Page Headings" />
      <MenuItem onClick={onClick} href="/case-headers" title="Case Headers" />
      <MenuItem onClick={onClick} href="/page-text" title="Page Text" />
      <MenuItem onClick={onClick} href="/tabs" title="Tabs" />
      <MenuItem onClick={onClick} href="/fast-links" title="Fast Links" />
      <br />
      <h5>Elements</h5>
      <MenuItem onClick={onClick} href="/panels" title="Panels" />
      <MenuItem onClick={onClick} href="/cards" title="Cards" />
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
    <hr />

    <ul className={styles['sidebar-menu']}>
      <h4>
        <strong>Other</strong>
      </h4>
      <MenuItem onClick={onClick} href="/theme" title="Theme builder" />
    </ul>
    <hr />
  </div>
);

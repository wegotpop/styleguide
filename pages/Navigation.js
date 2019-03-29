import React from 'react';

import { MenuItem } from './components/MenuItem';
import styles from './css/NavigationPage.css';

export default props => (
  <div>
    <h2>Navigation</h2>
    <h3>In-page navigation</h3>
    <ul className={styles['spaced-list']}>
      <MenuItem onClick={props.onClick} href="/fast-links" title="Fast links" />
    </ul>
  </div>
);

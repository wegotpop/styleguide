import React from 'react';

import { MenuItem } from './components/MenuItem';

export default props => (
  <div>
    <h2>Navigation</h2>
    <h3>In-page navigation</h3>
    <ul>
      <MenuItem onClick={props.onClick} href="/fast-links" title="Fast links" />
    </ul>
  </div>
);

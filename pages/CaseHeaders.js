import React from 'react';
import classNames from 'classname';
import CaseHeaders from './assets/caseHeaders.png';
import styles from './css/caseHeaders.css';

export default () => (
  <div>
    <h2>Case Headers</h2>
    <p>
      Case headers inform the user of what object in the system they are looking
      at. These headers usually contain actions that a user can perform on that
      object. Other header elements (icon, status badge, etc.) are optional and
      should be used when the use case requires them.
    </p>
    <section>
      <h3>Tab headers</h3>
      <div>
        <ul class={classNames(styles.nav, styles['nav-tabs'])}>
          <li class="active" role="presentation">
            <a href="#">Selected</a>
          </li>
          <li class={styles.hover} role="presentation">
            <a href="#">Hover</a>
          </li>
          <li class="" role="presentation">
            <a href="#">Default</a>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <h3>Headers</h3>
      <img src={CaseHeaders} />
    </section>
  </div>
);

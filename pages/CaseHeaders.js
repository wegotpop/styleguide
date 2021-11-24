import React from 'react';
import classNames from 'classname';
import CaseHeaders from './assets/caseHeaders.png';
import * as styles from './css/caseHeaders.css';

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
        <ul className={classNames(styles['navigation-tabs'])}>
          <li
            className={classNames(
              styles['navigation-tabs--item'],
              styles['navigation-tabs--active']
            )}
            role="presentation"
          >
            <a className={styles['navigation-tabs--item---link']} href="#">
              Selected
            </a>
          </li>
          <li
            className={classNames(
              styles['navigation-tabs--item'],
              styles.hover
            )}
            role="presentation"
          >
            <a className={styles['navigation-tabs--item---link']} href="#">
              Hover
            </a>
          </li>
          <li
            className={classNames(styles['navigation-tabs--item'])}
            role="presentation"
          >
            <a className={styles['navigation-tabs--item---link']} href="#">
              Default
            </a>
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

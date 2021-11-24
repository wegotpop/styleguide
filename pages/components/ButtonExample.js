import React from 'react';
import * as styles from '../css/ButtonPage.css';
import classNames from 'classname';

export function ButtonExample({ label, colour, cssClass, blurb }) {
  return (
    <div className={styles['button-section']}>
      <h4>{label}</h4>
      <div>{blurb}</div>
      <br />
      <div>
        CSS class: <code>{cssClass}</code>
      </div>
      <div>
        <button className={classNames('btn', cssClass)}>Action</button>
      </div>
    </div>
  );
}

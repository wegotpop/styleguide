import React from 'react';
import styles from '../css/ButtonPage.css';
import buttonStyles from '../../css/button.css';

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
        <button className={`${buttonStyles.btn} ${buttonStyles[cssClass]}`}>
          Action
        </button>
      </div>
    </div>
  );
}

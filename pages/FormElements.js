import React from 'react';
import styles from './css/forms.css';
// import FormDiagram from './assets/form-diagram.png';

export default () => (
  <div>
    <h2>Form Elements</h2>
    <p>
      Form inputs are the primary method of communication with customers. That’s
      why consistent, clear, and familiar patterns and short, simplified forms
      are crucial in improving user conversion.
    </p>
    <p>
      Here, we’ve defined the common input types, styles, modes, and layouts
      that POP uses to drive results.
    </p>
    <div>
      <img
        className={styles.image}
        src={require('./assets/form-diagram.png')}
      />
    </div>
  </div>
);

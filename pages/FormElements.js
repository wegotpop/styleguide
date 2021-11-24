import React from 'react';
import * as styles from './css/forms.css';
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

    <section>
      <h3>Alerts</h3>
      <p>
        Alerts contained inside a <code>form-group</code> will have slightly
        different styling.
      </p>
      <p>
        These are used to highlight errors/warnings and other bits of
        information about an input
      </p>
      <div className="form-group">
        <div className="alert alert-info">
          This is an <code>alert alert-info</code>
        </div>
        <div className="alert alert-success">
          This is an <code>alert alert-success</code>
        </div>
        <div className="alert alert-warning">
          This is an <code>alert alert-warning</code>
        </div>
        <div className="alert alert-danger">
          This is an <code>alert alert-danger</code>
        </div>
      </div>
    </section>
    <section>
      <h3>Required Inputs</h3>
      <p>Required fields are prepended with a red asterisk (*).</p>
      <p>
        <code>control-label field-required</code>.
      </p>
      <label className="control-label field-required" htmlFor="text">
        Required Text Input
      </label>
      <input className="form-control" type="text" name="text" />
    </section>

    <section>
      <h3>Flow Diagram</h3>
      <div>
        <img
          className={styles.image}
          src={require('./assets/form-diagram.png')}
        />
      </div>
    </section>
  </div>
);

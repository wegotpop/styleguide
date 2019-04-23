import React from 'react';
import tableStyles from '../css/tables.css';
import linkStyles from '../css/link.css';
import ButtonDiagram from './assets/button-diagram.svg';
import buttonStyles from '../css/button.css';
import styles from './css/ButtonPage.css';

function ButtonExample({ label, colour, cssClass, blurb }) {
  return (
    <div className={styles['button-section']}>
      <h4>
        {label} ({colour})
      </h4>
      <div>
        CSS class: <code>{cssClass}</code>
      </div>
      <div>{blurb}</div>
      <div>
        <button className={`${buttonStyles.btn} ${buttonStyles[cssClass]}`}>
          Action Intent
        </button>
      </div>
    </div>
  );
}

export default () => {
  return (
    <div>
      <h2>Buttons and Links</h2>
      <p>
        Buttons were created to fire form actions. Hyperlinks were created to
        allow users to jump from one document to another. For example, If the
        screen view changes to an entirely different document, a link control
        should be used. If the form on the screen is simply altered, a button
        control should be used.
      </p>
      <section>
        <h3>States</h3>
        <table className={tableStyles.table}>
          <thead>
            <th>Default</th>
            <th>Hover</th>
            <th>Pressed</th>
            <th>Disabled</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <button className={`${buttonStyles.btn}`}>Action Intent</button>
              </td>
              <td>
                <button
                  className={`${buttonStyles.btn} ${buttonStyles['btn-hover']}`}
                >
                  Action Intent
                </button>
              </td>
              <td>
                <button
                  className={`${buttonStyles.btn} ${buttonStyles['btn-focus']}`}
                >
                  Action Intent
                </button>
              </td>
              <td>
                <button disabled={true} className={buttonStyles.btn}>
                  Action Intent
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>Buttons</h3>
        <ButtonDiagram />
      </section>
      <section>
        <h3>Links</h3>
        <p>
          Links always do one of two things — open a new view or move to a
          position on the current view. Don't use a link when the user is
          performing an action: use a "Light" button instead.
        </p>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <td>Default</td>
              <td>Hover</td>
              <td>Pressed</td>
              <td>Disabled</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a className={linkStyles.link} href="#">
                  Action Intent
                </a>
              </td>
              <td>
                <a
                  className={`${linkStyles.link} ${linkStyles.hover}`}
                  href="#"
                >
                  Action Intent
                </a>
              </td>
              <td>
                <a
                  className={`${linkStyles.link} ${linkStyles.focus}`}
                  href="#"
                >
                  Action Intent
                </a>
              </td>
              <td>
                <a
                  className={`${linkStyles.link} ${linkStyles.disabled}`}
                  href="#"
                >
                  Action Intent
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>Colours</h3>
        <ButtonExample
          label="Default"
          colour="White"
          cssClass="btn-default"
          blurb="White colour is the defaut colour across platform, associated with secondary actions."
        />

        <ButtonExample
          label="Primary"
          colour="Teal"
          cssClass="btn-primary"
          blurb="Teal colour is the defaut colour across platform, associated with primary actions."
        />

        <ButtonExample
          label="Info"
          colour="Blue"
          cssClass="btn-info"
          blurb="Blue colour is associated with secondary actions that don't afect your workflow and that are considered as safe"
        />

        <ButtonExample
          label="Success"
          colour="Green"
          cssClass="btn-success"
          blurb="Green colour is associated with positive actions on the platform."
        />

        <ButtonExample
          label="Warning"
          colour="Yellow"
          cssClass="btn-warning"
          blurb=""
        />

        <ButtonExample
          label="Danger"
          colour="Red"
          cssClass="btn-danger"
          blurb="Red colour is associated with negative or destructive actions that have an immediate affect on the workflow."
        />

        <ButtonExample
          label="Link"
          colour="N/A"
          cssClass="btn-link"
          blurb="Used when buttons need to look like a link, but behave like a button."
        />

        <ButtonExample
          label="Reject"
          colour="Black"
          cssClass="btn-reject"
          blurb="Black colour is associated with returning actions or actions that might affect your workflow, although not instantly. "
        />

        <ButtonExample
          label="Alteration"
          colour="Grey"
          cssClass="btn-alteration"
          blurb="Grey colour is associated with a change on the system or on a content."
        />
      </section>
    </div>
  );
};

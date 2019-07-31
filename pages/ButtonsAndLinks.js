import React from 'react';
import tableStyles from '../css/tables.css';
import linkStyles from '../css/link.css';
import ButtonDiagram from './assets/button-diagram.svg';
import buttonStyles from '../css/button.css';
import styles from './css/ButtonPage.css';

function ButtonExample({ label, colour, cssClass, blurb }) {
  return (
    <div className={styles['button-section']}>
      <h4>{label}</h4>
      <div>{blurb}</div>
      <br />
      <div>
        CSS class: &nbsp;<code>{cssClass}</code>
      </div>
      <div>
        <button className={`${buttonStyles.btn} ${buttonStyles[cssClass]}`}>
          Action
        </button>
      </div>
    </div>
  );
}

export default () => {
  return (
    <div>
      <section>
        <h1>Buttons</h1>
        <p>
          Buttons are used to fire actions. For example, If the screen view
          changes to an entirely different document, a link control should be
          used. If the form on the screen is simply altered, a button control
          should be used.
        </p>
      </section>
      <section>
        <h3>Labelling</h3>
        <p>
          Labelling for buttons should be descriptive and will usually follow{' '}
          <code>(action)(object)</code> syntax; for example, if pressing the
          button sends a message then the button label should probably be{' '}
          <code>Send Message</code>.
        </p>
        <p>
          Button labels should always use title case, as this helps to
          distinguish the button from other nearby text.
        </p>
      </section>
      <section>
        <h3>Button Types</h3>
        <br />
        <h4>Singular Actions</h4>
        <p>
          Button labels should always use title case, as this helps to
          distinguish the button from other nearby text.
        </p>
        <h5>Example</h5>
        <br />
        <button className={`${buttonStyles.btn}`}>Action</button>
        <br />
        <br />
        <h4>Dropdown Buttons</h4>
        <p>
          Related actions; where possible, related actions should be grouped
          into dropdowns. Grouped actions need to be related and equivalent;
          this button type should only be used when the nested options are a
          subtype of the action that’s in the drop down button.
        </p>
        <h5>Labelling</h5>
        <p>
          The label of a dropdown button should follow the{' '}
          <code>(action)(object)</code> syntax, as usual.
        </p>
        <h5>Example</h5>
        <p>
          If multiple versions of the same object can be created, then a
          dropdown is used. For example, multiple engagement types can be
          selected from a `New Engagement` button.{' '}
        </p>
        <br />
        <p>
          <strong>Example TBC</strong>
        </p>
      </section>
      {/*<section>
        <h3>Buttons</h3>
        <ButtonDiagram />
      </section>*/}
      <section>
        <h3>Colours</h3>
        <br />
        <ButtonExample
          label="Default/Secondary Action"
          colour="White"
          cssClass="btn-default"
          blurb="This is the default button colour; unless a button requires "
        />

        <ButtonExample
          label="Primary Action"
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

        {/*<ButtonExample
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
        />*/}
      </section>
      <section>
        <h3>Button Placement</h3>
        <h4>Tables and Lists</h4>
        <p>
          Due to the volume of actions associated to tables and lists, it's
          possible for these components to necessitate a high number of buttons;
          because of this, buttons have been grouped into a series of button
          bars:
        </p>
        <ul>
          <li>
            Actions; actions that modify or transform data within a table/list
            should be placed above the table/list, aligned to the left. The
            primary action should be the left-aligned button. Secondary actions
            should be grouped to the right of the primary action.
          </li>
          <li>
            Tools; tooling that enables users to search, select, sort or filter
            a table/list should be placed above the table/list, aligned to the
            left
          </li>
          <li></li>
        </ul>
        <p></p>
        <p></p>
      </section>
      <section>
        <h3>States</h3>
        <br />
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
                <button className={`${buttonStyles.btn}`}>Action</button>
              </td>
              <td>
                <button
                  className={`${buttonStyles.btn} ${buttonStyles['btn-hover']}`}
                >
                  Action
                </button>
              </td>
              <td>
                <button
                  className={`${buttonStyles.btn} ${buttonStyles['btn-focus']}`}
                >
                  Action
                </button>
              </td>
              <td>
                <button disabled={true} className={buttonStyles.btn}>
                  Action
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

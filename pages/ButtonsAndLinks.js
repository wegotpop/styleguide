import React from 'react';
import tableStyles from '../css/tables.css';
import linkStyles from '../css/link.css';
import ButtonDiagram from './assets/button-diagram.svg';
import buttonStyles from '../css/button.css';
import styles from './css/ButtonPage.css';
import { MenuItem } from './components/MenuItem';

function ButtonExample({ label, colour, cssClass, blurb }) {
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

export default props => {
  return (
    <div>
      <section>
        <h1>Buttons</h1>
        <p>
          Buttons are used to fire actions; the nature of the button's action
          may change the button style, content and positioning. This page has
          been constructed to assist you in understanding how to implement the
          buttons your require.
        </p>
      </section>
      <section>
        <h2>
          <strong>Button Content</strong>
        </h2>
        <br />
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
        <h3>Primary and Secondary Actions</h3>
        <br />
        <ButtonExample
          label="Default/Secondary Action"
          colour="White"
          cssClass="btn-default"
          blurb="This is the default button colour; unless the action is deemed as primary (or when a colour is deemed appropriate, such as destructive actions."
        />

        <ButtonExample
          label="Primary Action"
          colour="Teal"
          cssClass="btn-primary"
          blurb="Teal colour is the defaut colour across platform, associated with primary actions."
        />
        <p>For more information about using colours with buttons, read the</p>
        <MenuItem
          onClick={props.onClick}
          href="/button-colours"
          title="Button Colour Guide"
        />
      </section>
      <section>
        <h2>
          <strong>Button Types</strong>
        </h2>
        <br />
        <h4>Singular Actions</h4>
        <p>
          Button labels should always use title case, as this helps to
          distinguish the button from other nearby text.
        </p>
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
        <p>
          The label of a dropdown button should follow the{' '}
          <code>(action)(object)</code> syntax, as usual.
        </p>
        <p>
          <strong>[Example TBC, Dropdown Button]</strong>
        </p>
        <br />
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
      <section>
        <h2>
          <strong>Positioning</strong>
        </h2>
        <br />
        <h3>Ordering</h3>
        <br />
        <p>
          Buttons should align to the top and left. The primary action should be
          the left-aligned button. Secondary actions should be grouped to the
          right of the primary action.
        </p>
        <h3>Placement</h3>
        <br />
        <h4>Tables and Lists</h4>
        <p>
          Due to the volume of actions associated to tables and lists, it's
          possible for these components to necessitate a high number of buttons;
          because of this, buttons have been grouped into a series of button
          bars:
        </p>
        <ul>
          <li>Actions; actions that create, modify or transform data</li>
          <li>
            Tools; buttons that enable users to search, select, sort or filter
          </li>
          <li>
            Pagination; buttons that enable the user to control the results they
            are viewing
          </li>
        </ul>
        <p>
          On table and list pages, the button bars are duplicated above and
          below the table/list content (appearing in reverse order when
          beneath).
        </p>
        <ol>
          <li>Actions</li>
          <li>Tools</li>
          <li>Pagination</li>
          <li>Table / List</li>
          <li>Pagination</li>
          <li>Tools</li>
          <li>Actions</li>
        </ol>
        <br />
        <h4>Forms & Widget Pages</h4>
        <p>
          Actions on widget pages should be grouped into a button bar and to be
          placed in a container at the top and left of the content they relate
          to.
        </p>
        <h5>Single Panel Forms</h5>
        <p>
          Actions that enable users to edit the contents of a panel should
          appear within the panel, below the panel header and left-aligned.
        </p>
        <h5>Multiple Panel Forms</h5>
        <p>
          When a form is split across multiple panels, actions that save or
          submit a form should be placed outside of the last panel, aligned to
          the left (to align with the "F pattern").
        </p>
      </section>
    </div>
  );
};

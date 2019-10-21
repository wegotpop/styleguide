import React from 'react';
import tableStyles from '../css/tables.css';
import linkStyles from '../css/link.css';
import ButtonDiagram from './assets/button-diagram.svg';
import buttonStyles from '../css/button.css';
import styles from './css/ButtonPage.css';
import { ButtonExample } from './components/ButtonExample';

export function Links() {
  return (
    <div>
      <section>
        <h2>Links</h2>
        <p>
          Links ideally should highlight a description of the linked item within
          the text and should follow the normal copy conventions for text in a
          page.
        </p>
      </section>
      <section>
        <h3>Labelling</h3>
        <p>Button text should use title case</p>
      </section>
      <section>
        <h3>Placement</h3>
        <p>Button text should use title case</p>
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
                  Action
                </a>
              </td>
              <td>
                <a
                  className={`${linkStyles.link} ${linkStyles.hover}`}
                  href="#"
                >
                  Action
                </a>
              </td>
              <td>
                <a
                  className={`${linkStyles.link} ${linkStyles.focus}`}
                  href="#"
                >
                  Action
                </a>
              </td>
              <td>
                <a
                  className={`${linkStyles.link} ${linkStyles.disabled}`}
                  href="#"
                >
                  Action
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>Colours</h3>
        <ButtonExample
          label="Link"
          colour="N/A"
          cssClass="btn-link"
          blurb="Used when buttons need to look like a link, but behave like a button."
        />
      </section>
    </div>
  );
}

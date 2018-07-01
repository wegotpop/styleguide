import React from 'react';
import tableStyles from '../css/tables.css';
import linkStyles from '../css/link.css';

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
        <h3>Buttons</h3>
        <p>TO BE FILLED IN</p>
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
        <div>
          <h4>Usage:</h4>
          <pre>
            <pre
            >{`import linkStyles from '@wegotpop/styleguide/link.css';`}</pre>
          </pre>
          <pre>
            <code>{`<Component className={linkStyles.link} />`}</code>
          </pre>
          <p>
            Hover and Focus are provided automatically when using the{' '}
            <code>link</code> class.
          </p>
          <p>
            They can also be accessed separately via the <code>hover</code> and{' '}
            <code>focus</code> classes.
          </p>
          <p>
            <code>disabled</code> is provided to styles a disbaled link.
          </p>
        </div>
      </section>
    </div>
  );
};

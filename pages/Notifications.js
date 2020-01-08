import React from 'react';

export default () => {
  return (
    <main>
      <section>
        <h2>Alerts and Toasts</h2>
        <section>
          <h4>Overview</h4>
          <p>
            Alerts and toasts are used to communicate a message with a severity
            attached to it. They grab the user's attention to provide critical
            information needed in context.
          </p>
        </section>
        <section>
          <h4>Validation Messages</h4>
          <p>
            Validation messages are error-handling messages related to user's
            inputs and they communicate whether the data just entered was
            incomplete or incorrect. Message validation can be performed either
            in real-time or after the user triggers the action. The notification
            should inform in plain and simple language that a non-technical user
            understands, so that it does not add to confusion or demoralises the
            user.
          </p>
        </section>
        <section>
          <h4>Alerts</h4>
          <p>
            Alerts announce an event that has some significance for the users,
            they triggered by the system and not by user's immediate actions. It
            is recommended to use compact-size and concise language as you share
            an alert.
          </p>

          <h5>App level alert</h5>
          <p>
            App-level alerts are placed at the very top of the global context.
            They should not be placed in any other configuration. The purpose
            for app-level alerts is to relate to the full context of the overall
            application. Example: Privacy policy alert
          </p>

          <h5>Widget alert</h5>
          <p>
            Alerts are placed in relation to a page context. They are used for
            server validation errors or to communicate information that relates
            to the page. It is recommended to have an alert at the top of the
            page or near the context that the action took place to attract users
            attention. Example: On-set or new record page
          </p>

          <h5>Section alert</h5>
          <p>
            Section alerts can be placed in multiple different contexts inside a
            component / panel. It is not recommended to use more than one alert
            within a panel as it distracts the user and dilutes the importance
            of the alert displayed. Example: Change password screen
          </p>
        </section>
        <section>
          <h4>Toasts</h4>
          <p>
            Toasts provide brief messages about app processes in direct response
            to a user's action. You can have up to five toasts onscreen at the
            same time moving away when a new one pops-up. Toasts are dismissible
            and are located at the bottom right of the screen.
          </p>

          <h5>Flashing toasts</h5>
          <p>
            Flashing toasts have a built-in timeout of 2.5 seconds. Users can
            also manually dismiss them by pressing on the x button or on the
            notification itself.
          </p>

          <h5>Onscreen toasts</h5>
          <p>
            Onscreen toasts are persistent until the user dismisses them. Users
            can dismiss them by pressing on the x button or on the notification
            itself.
          </p>
        </section>
        <section>
          <h4>Class Types</h4>
          <p>Alerts and toasts share the following denoted classes:</p>

          <h5>Info</h5>
          <code>alert alert-info</code>
          <p>
            The general information alert is used to give a user non-critical
            status update on a piece of information or action.
          </p>
          <h5>Success</h5>
          <code>alert alert-success</code>
          <p>
            The success alert is used to inform the user of a success of a case
            and or when a task has been successfully completed.
          </p>
          <h5>Warning</h5>
          <code>alert alert-warning</code>
          <p>
            The warning alert is meant to capture a user's attention in a manner
            similar to the danger alert; however, the issue presented to the
            user is much less critical.
          </p>
          <h5>Danger</h5>
          <code>alert alert-danger</code>
          <p>
            Danger alert is used to inform user of errors in processing or that
            a failure in the process has occurred. Error messages should
            precisely state what the problem is and how the user can solve it.
          </p>
          <h5>Dismissable</h5>
          <code>alert alert-info alert-dismissible</code>
          <p>
            Optionally alerts can also be dismissible. They are meant to be used
            when information doesn't necessarily need to be persistent and when
            users need more time to notice, read, or interact with alerts.
          </p>
        </section>
        <section>
          <h4>Mobile</h4>
          <p>
            Toasts and notifications extend to the full width of the screen.
          </p>
        </section>
      </section>
    </main>
  );
};

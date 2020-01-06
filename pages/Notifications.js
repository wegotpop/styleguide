import React from 'react';

export default () => {
  return (
    <main>
      <section>
        <h2>Alerts and Toasts</h2>
        <h4>Overview</h4>
        <p>
          Alerts and toasts are used to communicate a message with a severity
          attached to it. They grab the user’s attention to provide critical
          information needed in context.
        </p>
        <h4>Validation Messages</h4>
        <p>
          Validation messages are error-handling messages related to user’s
          inputs and they communicate whether the data just entered was
          incomplete or incorrect. Message validation can be performed either in
          real-time or after the user triggers the action. The notification
          should inform in plain and simple language that a non-technical user
          understands, so that it does not add to confusion or demoralises the
          user.
        </p>
        <h4>Alerts</h4>
        <p>
          Alerts announce an event that has some significance for the users,
          they triggered by the system and not by user’s immediate actions. It
          is recommended to use compact-size and concise language as you share
          an alert.
        </p>

        <b>App level alert</b>
        <p>
          App-level alerts are placed at the very top of the global context.
          They should not be placed in any other configuration. The purpose for
          app-level alerts is to relate to the full context of the overall
          application. Example: Privacy policy alert
        </p>

        <b>Widget alert</b>
        <p>
          Alerts are placed in relation to a page context. They are used for
          server validation errors or to communicate information that relates to
          the page. It is recommended to have an alert at the top of the page or
          near the context that the action took place to attract users
          attention. Example: On-set or new record page
        </p>

        <b>Section alert</b>
        <p>
          Section alerts can be placed in multiple different contexts inside a
          component / panel. It is not recommended to use more than one alert
          within a panel as it distracts the user and dilutes the importance of
          the alert displayed. Example: Change password screen
        </p>
        <h4>Toasts</h4>
        <p>
          Toasts provide brief messages about app processes in direct response
          to a user’s action. You can have up to five toasts onscreen at the
          same time moving away when a new one pops-up. Toasts are dismissible
          and are located at the bottom right of the screen.
        </p>

        <b>Flashing toasts</b>
        <p>
          Flashing toasts have a built-in timeout of 2.5 seconds. Users can also
          manually dismiss them by pressing on the x button or on the
          notification itself.
        </p>

        <b>Onscreen toasts</b>
        <p>
          Onscreen toasts are persistent until the user dismisses them. Users
          can dismiss them by pressing on the x button or on the notification
          itself.
        </p>
        <h4>Class Types</h4>
        <p>Alerts and toasts share the following denoted classes:</p>

        <b>alert alert-info</b>
        <p>
          The general information alert is used to give a user non-critical
          status update on a piece of information or action.
        </p>
        <b>alert alert-success</b>
        <p>
          The success alert is used to inform the user of a success of a case
          and or when a task has been successfully completed.
        </p>
        <b>alert alert-warning</b>
        <p>
          The warning alert is meant to capture a user’s attention in a manner
          similar to the danger alert; however, the issue presented to the user
          is much less critical.
        </p>
        <b>alert alert-danger</b>
        <p>
          Danger alert is used to inform user of errors in processing or that a
          failure in the process has occurred. Error messages should precisely
          state what the problem is and how the user can solve it.
        </p>
        <b>alert alert-info alert-dismissible</b>
        <p>
          Optionally alerts can also be dismissible. They are meant to be used
          when information doesn’t necessarily need to be persistent and when
          users need more time to notice, read, or interact with alerts.
        </p>
        <h4>Mobile</h4>
        <p>Toasts and notifications extend to the full width of the screen.</p>
      </section>
    </main>
  );
};

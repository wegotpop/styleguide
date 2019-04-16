import React from 'react';

export function WidgetPages() {
  return (
    <main>
      <h1>Widget Pages</h1>

      <p>Widget pages render widget configurations across the site.</p>

      <p>Their basic structure should be:</p>

      <ol>
        <li>Action buttons</li>
        <li>Widget container</li>
        <li>Action buttons</li>
      </ol>

      <h2>Action buttons</h2>

      <p>
        Action buttons are a button toolbar (currently we are using Bootstrap's{' '}
        <a href="https://getbootstrap.com/docs/3.3/components/#btn-groups">
          ButtonGroups
        </a>
        ) in a custom wrapper to ensure spacing between other page elements.
      </p>

      <p>
        They should be in a container that spaces them from the other elements
        of the page, the buttons should not be directly sitting on a widget
        panel or the heading.
      </p>

      <p>
        Action buttons should be left-aligned and there can be multiple rows of
        them depending on who the user is and what they have access to. Ideally
        buttons that are for staff, clients and users should not be mixed
        together in the same container.
      </p>

      <p>
        Ideally buttons should be disabled if the user does not have permission
        to perform the action associated with the button rather than removed
        completely.
      </p>

      <p>
        Buttons should follow the normal colour conventions for buttons, there
        should only be one primary button per collection of action buttons.
      </p>

      <h3>Example</h3>

      <div class="action-button-container">
        <button>Action button</button>
        <button>Another action</button>
      </div>

      <div class="action-button-container">
        <button>Different action</button>
        <button>For a different user type</button>
        <button>Or group of actions</button>
      </div>

      <p class="mt2 mb2">Widgets go here...</p>

      <div class="action-button-container">
        <button>Action button</button>
        <button>Another action</button>
      </div>

      <div class="action-button-container">
        <button>Different action type</button>
        <button>For a different user type</button>
        <button>Or group of actions</button>
      </div>
    </main>
  );
}

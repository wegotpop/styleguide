import React from 'react';

import { ProjectPageHeading } from './components/ProjectPageHeading';

export function Microcopy() {
  return (
    <main>
      <h1>Microcopy</h1>

      <p>
        Copy refers to text that is used on the website. Microcopy refers to
        small pieces of text on the website such as button or navigation labels,
        help text, popover text and so on. Microcopy uses compressed syntax and
        may not be grammatically correct in a conventional sense. Often the
        context it is used in allows some formal syntax to be omitted.
      </p>

      <p>
        Microcopy is used to prompt and guide the user, never to provide a
        detailed explanation of the system or the UI.
      </p>

      <h2>Guidelines for microcopy</h2>

      <h3>Fullstops</h3>

      <p>
        Don't use full stops in microcopy or other sentence fragments, this
        includes:
      </p>

      <ul>
        <li>Headings</li>
        <li>Bullet points</li>
        <li>Placeholder text</li>
        <li>Button labels</li>
        <li>Pop-ups or toasts</li>
      </ul>

      <h3>Buttons</h3>

      <p>
        Aim to have one word for a button, ideally an action or verb that
        indicates what the button will do.
      </p>

      <h3>Title text</h3>

      <p>
        Keep titles down to a short sentence fragment. If they grow too large
        then they cease to be useful.
      </p>
    </main>
  );
}

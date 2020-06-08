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

      <p>
        If the copy requires other punctuation in it (like semi-colons) then you
        should also add the fullstop. Try to rewrite the copy so the additional
        punctuation is not required though. In general having punctuation
        indicates that the text is too complex for it's purpose.
      </p>

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

      <h3>When Microcopy isn't Microcopy</h3>

      <p>
        Where the copy includes multiple sentences then this is no longer
        microcopy but is just regular copy and should follow the normal rules
        for copy.
      </p>

      <p>
        If you find yourself needing to put a lot of copy onto a UI element then
        consider simplifying the UI copy and adding a link to a help page or
        more detailed documentation. That way the user has an option to get more
        in-depth information without drowning the UI in detail.
      </p>
    </main>
  );
}

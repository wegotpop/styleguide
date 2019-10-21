import React from 'react';

import { ProjectPageHeading } from './components/ProjectPageHeading';

export function Microcopy() {
  return (
    <main>
      <section>
        <h1>Copy and Microcopy</h1>

        <p>
          Copy refers to text that is used on the website. Microcopy refers to
          small pieces of text on the website such as button or navigation
          labels, help text, popover text and so on. Microcopy uses compressed
          syntax and may not be grammatically correct in a conventional sense.
          Often the context it is used in allows some formal syntax to be
          omitted.
        </p>

        <p>
          Microcopy is used to prompt and guide the user, never to provide a
          detailed explanation of the system or the UI.
        </p>
      </section>
      <section>
        <h2>Guidelines for Microcopy</h2>
        <h5>POP Brand</h5>
        <p>Where referred to, POP should always appear in uppercase.</p>
        <h5>Buttons</h5>
        <p>
          It should be clear to a user what a button is for and what the
          resulting action will be. The button label should adhere to the
          `action, object` convention; for example, a button to save a draft
          message would say `save draft`.
        </p>
        <h5>Fullstops</h5>
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
        <br />
        <h3>Title text</h3>
        <p>
          Keep titles down to a short sentence fragment. If they grow too large
          then they cease to be useful. Titles should always be Titlecase (where
          the beginning of each words is capitalised).
        </p>
      </section>
    </main>
  );
}

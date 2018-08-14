import React from 'react';
import LanguageDiagram from './assets/language-diagram.png';

export default () => (
  <div>
    <h3>Language and text</h3>
    <p>
      Language, voice, and tone have a large effect on the usability of an
      application. Clear, concise language is essential and should be the
      guiding principle for all language in an application.
    </p>

    <section>
      <h4>Tone</h4>
      <p>
        While these are the guiding principles, the tone within a user interface
        may vary based on the role it serves. This diagram shares how the tone
        of various elements relate in an interface.
      </p>
      <p>
        <img style={{ width: '100%' }} src={LanguageDiagram} />
      </p>
    </section>
    <section>
      <h4>Grammar</h4>
      <p>
        POP interfaces are grammatically correct, friendly, and professional.
        Below are a few items to consider when writing for POP applications:
      </p>
      <ul style={{ padding: '2rem' }}>
        <li>Use the active voice, not the passive voice.</li>
        <li>
          Be concise. Do not use flowery language, but strive to be clear.
        </li>
        <li>
          Use a positive tone. When writing error messages, do not assign or
          take blame.
        </li>
        <li>
          Use full words instead of contractions (e.g., "do not" instead of
          "don't")
        </li>
        <li>Avoid abbreviations and jargon.</li>
        <li>
          When an object could be singular or plural, use the plural version for
          its label.
        </li>
      </ul>
      <p>TODO: Add example</p>
    </section>
    <section>
      <h4>Labelling</h4>
      <p>
        Labels should accurately and uniquely describe a field. Understanding
        the label should not be dependent on reading the other labels in a form
        or on the screen.
      </p>
      <div />
    </section>
  </div>
);

import React from 'react';
import colourStyles from './css/Colours.css';

const FEEDBACK_INFO = ['action-info'];

const FEEDBACK_POSITIVE = ['action-positive'];

const FEEDBACK_WARNING = ['action-warning'];

const FEEDBACK_ERROR = ['action-error'];

const FEEDBACK_DISABLED = ['greyscale-two'];

const BUTTON_PRIMARY = ['brand-main', 'white'];

const BUTTON_SECONDARY = ['white', 'black'];

const ColourBox = ({ colour }) => (
  <div className={colourStyles['bounding-box']}>
    <div
      key={colour}
      className={colourStyles['colour-box']}
      style={{
        backgroundColor: `var(--${colour})`
      }}
    >
      {getComputedStyle(document.querySelector(':root')).getPropertyValue(
        `--${colour}`
      )}
    </div>
    --
    {colour}
  </div>
);

const Section = ({ name, label, colours }) => {
  return (
    <section className={colourStyles['flex-container']}>
      <h4>{name}</h4>
      <p>{label}</p>
      <br />
      <div className={colourStyles.container}>
        {colours.map(colour => {
          return <ColourBox key={colour} colour={colour} />;
        })}
      </div>
    </section>
  );
};

export default () => (
  <div
    className={`${colourStyles.container} ${colourStyles['column-container']}`}
  >
    <section>
      <h1>Using Colours</h1>
      <p>
        We use colour to convey meaning for actions, notifications and statuses.
      </p>
      <hr />
      <section>
        <h2>Feedback Colour Guide</h2>
        <Section
          name="Information"
          label="Blue is used when a status or action is simply informational - the default when no other colour is applicable"
          colours={FEEDBACK_INFO}
        />
        <Section
          name="Positive Statuses / Actions"
          label="Green is used to indicate successes, completion and other positive actions"
          colours={FEEDBACK_POSITIVE}
        />
        <Section
          name="Warnings and Pending Statuses / Actions"
          label="Yellow is used to indicate that user attention is advised, either as a warning or because an action is pending"
          colours={FEEDBACK_WARNING}
        />
        <Section
          name="Negative or Destructive Statuses / Actions"
          label="Red is used to indicate errors, destructive and other negative actions"
          colours={FEEDBACK_ERROR}
        />
        <Section
          name="Disabled"
          label="Grey is used to indicate that an object is disabled or in an unpublished state, such as a draft message"
          colours={FEEDBACK_DISABLED}
        />
      </section>
      <section>
        <h2>Buttons</h2>
        <Section
          name="Primary Buttons"
          label="Primary action buttons have a teal background and white text"
          colours={BUTTON_PRIMARY}
        />
        <Section
          name="Secondary Buttons"
          label="Secondary action buttons have a white background with black text"
          colours={BUTTON_SECONDARY}
        />
      </section>
    </section>
  </div>
);

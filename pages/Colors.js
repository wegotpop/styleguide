import React from 'react';
import colourStyles from './css/Colours.css';

const PRIMARY_COLOURS = ['darker', 'dark', 'primary', 'light', 'lighter'];
const GREYSCALE_COLOURS = [
  'black',
  'darkgrey',
  'grey',
  'lightgrey',
  'lightergrey',
];

const SECONDAY_COLOURS = ['secondary-dark', 'secondary', 'secondary-soft'];
const FEEDBACK_COLOURS = [
  'feedback-success',
  'feedback-warning',
  'feedback-error',
];

const ColourBox = ({ colour }) => (
  <div className={colourStyles['bounding-box']}>
    <div
      key={colour}
      className={colourStyles['colour-box']}
      style={{
        backgroundColor: `var(--brand-${colour})`,
      }}
    >
      {getComputedStyle(document.querySelector(':root')).getPropertyValue(
        `--brand-${colour}`,
      )}
    </div>
    --brand-{colour}
  </div>
);

const Section = ({ name, colours }) => {
  return (
    <section className={colourStyles['flex-container']}>
      <h4>{name}</h4>
      <div className={colourStyles.container}>
        {colours.map(colour => <ColourBox key={colour} colour={colour} />)}
      </div>
    </section>
  );
};

export default () => (
  <div
    className={`${colourStyles.container} ${colourStyles['column-container']}`}
  >
    <h2>Color palette</h2>
    <p>
      Consistency of color is critical to maintaining a coherent family of
      products, and accurately communicating the nature of specific content
      within an application.
    </p>
    <p>
      Colors are also used to distinguish where on the screen particular content
      resides, such as on mobile devices where users need to be able to see
      visual breaks while scrolling.
    </p>
    <Section name="Primary" colours={PRIMARY_COLOURS} />
    <Section name="Greyscale" colours={GREYSCALE_COLOURS} />
    <Section name="Secondary" colours={SECONDAY_COLOURS} />
    <Section name="System Feedback" colours={FEEDBACK_COLOURS} />
    <section>
      <h4>Meaning</h4>
      <ul id={colourStyles['meaning-list']}>
        <li className={colourStyles['list-item']}>
          <span
            style={{
              backgroundColor: 'var(--brand-secondary)',
            }}
          />{' '}
          Blue - Status - info / no issues
        </li>
        <li className={colourStyles['list-item']}>
          <span
            style={{
              backgroundColor: 'var(--brand-feedback-success)',
            }}
          />{' '}
          Green - Successes, completions, increases, positive actions
        </li>
        <li className={colourStyles['list-item']}>
          {' '}
          <span
            style={{
              backgroundColor: 'var(--brand-feedback-warning)',
            }}
          />{' '}
          Yellow - Warnings
        </li>
        <li className={colourStyles['list-item']}>
          <span
            style={{
              backgroundColor: 'var(--brand-feedback-error)',
            }}
          />{' '}
          Red - Errors, negative messaging, losses, high priority, overdue,
          important
        </li>
      </ul>
    </section>
  </div>
);

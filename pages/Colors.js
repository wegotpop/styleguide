import React from 'react';
import colourStyles from './css/Colours.css';

const PRIMARY_COLOURS = [
  'brand-one',
  'brand-two',
  'brand-main',
  'brand-three',
  'brand-four',
];
const GREYSCALE_COLOURS = [
  'black',
  'greyscale-one',
  'greyscale-two',
  'greyscale-three',
  'greyscale-four',
  'white',
];

const SECONDAY_COLOURS = ['secondary-one', 'secondary-two'];
const FEEDBACK_COLOURS = [
  'action-info',
  'action-positive',
  'action-warning',
  'action-error',
];

const ColourBox = ({ colour }) => (
  <div className={colourStyles['bounding-box']}>
    <div
      key={colour}
      className={colourStyles['colour-box']}
      style={{
        backgroundColor: `var(--${colour})`,
      }}
    >
      {getComputedStyle(document.querySelector(':root')).getPropertyValue(
        `--${colour}`,
      )}
    </div>
    --{colour}
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
              backgroundColor: 'var(--action-info)',
            }}
          />{' '}
          Blue - Status - info / no issues
        </li>
        <li className={colourStyles['list-item']}>
          <span
            style={{
              backgroundColor: 'var(--action-positive)',
            }}
          />{' '}
          Green - Successes, completions, increases, positive actions
        </li>
        <li className={colourStyles['list-item']}>
          {' '}
          <span
            style={{
              backgroundColor: 'var(--action-warning)',
            }}
          />{' '}
          Yellow - Warnings
        </li>
        <li className={colourStyles['list-item']}>
          <span
            style={{
              backgroundColor: 'var(--action-error)',
            }}
          />{' '}
          Red - Errors, negative messaging, losses, high priority, overdue,
          important
        </li>
      </ul>
    </section>
  </div>
);

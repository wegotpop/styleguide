import React from 'react';
import colourStyles from './css/Colours.css';

const PRIMARY_COLOURS = ['one', 'two', 'three', 'four', 'five'];
const GREYSCALE_COLOURS = [
  'greyscale-one',
  'greyscale-two',
  'greyscale-three',
  'greyscale-four',
  'greyscale-five',
];

const SECONDAY_COLOURS = ['secondary-one', 'secondary-two', 'secondary-three'];
const FEEDBACK_COLOURS = ['feedback-one', 'feedback-two', 'feedback-three'];

const ColourBox = ({ colour }) => (
  <div key={colour} className={colourStyles['bounding-box']}>
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
    var(--brand-{colour})
  </div>
);

export default () => (
  <div
    className={`${colourStyles.container} ${colourStyles['column-container']}`}
  >
    <h2>Color palette</h2>
    <section className={colourStyles['flex-container']}>
      <h4>Primary</h4>
      <div className={colourStyles.container}>
        {PRIMARY_COLOURS.map(colour => <ColourBox colour={colour} />)}
      </div>
    </section>
    <section className={colourStyles['flex-container']}>
      <h4>Greyscale</h4>
      <div className={colourStyles.container}>
        {GREYSCALE_COLOURS.map(colour => <ColourBox colour={colour} />)}
      </div>
    </section>
    <section className={colourStyles['flex-container']}>
      <h4>Secondary</h4>
      <div className={colourStyles.container}>
        {SECONDAY_COLOURS.map(colour => <ColourBox colour={colour} />)}
      </div>
    </section>
    <section className={colourStyles['flex-container']}>
      <h4>Secondary</h4>
      <div className={colourStyles.container}>
        {FEEDBACK_COLOURS.map(colour => <ColourBox colour={colour} />)}
      </div>
    </section>
  </div>
);

import React from 'react';
import { MenuItem } from './components/MenuItem';
import colourStyles from './css/Colours.css';

const PRIMARY_COLOURS = [
  'brand-one',
  'brand-two',
  'brand-main',
  'brand-three',
  'brand-four'
];
const GREYSCALE_COLOURS = [
  'black',
  'greyscale-one',
  'greyscale-two',
  'greyscale-three',
  'greyscale-four',
  'greyscale-five',
  'white'
];

const SECONDARY = {
  Blue: ['blue-one', 'blue-two', 'blue-main', 'blue-three', 'blue-four'],
  Purple: [
    'purple-one',
    'purple-two',
    'purple-main',
    'purple-three',
    'purple-four'
  ],
  Green: ['green-one', 'green-two', 'green-main', 'green-three', 'green-four'],
  Yellow: [
    'yellow-one',
    'yellow-two',
    'yellow-main',
    'yellow-three',
    'yellow-four'
  ],
  Orange: [
    'orange-one',
    'orange-two',
    'orange-main',
    'orange-three',
    'orange-four'
  ],
  Red: ['red-one', 'red-two', 'red-main', 'red-three', 'red-four'],
  Other: ['secondary-one', 'secondary-two']
};

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

const Section = ({ name, colours }) => {
  return (
    <section className={colourStyles['flex-container']}>
      <h4>{name}</h4>
      <br />
      <div className={colourStyles.container}>
        {colours.map(colour => {
          return <ColourBox key={colour} colour={colour} />;
        })}
      </div>
    </section>
  );
};

export default props => (
  <div
    className={`${colourStyles.container} ${colourStyles['column-container']}`}
  >
    <section>
      <h1>Colour Palette</h1>
      <p>
        Consistency of color is critical to maintaining a coherent family of
        products, and accurately communicating the nature of specific content
        within an application. Colours are also used to distinguish where on the
        screen particular content resides, such as on mobile devices where users
        need to be able to see visual breaks while scrolling.
      </p>
      <p>
        For information about using colours to convey meaning, such as in
        notifications or badges, read the{' '}
        <MenuItem
          onClick={props.onClick}
          href="/colour-user"
          title="Feedback Colour Guide"
        />
      </p>
    </section>
    <Section name="Primary" colours={PRIMARY_COLOURS} />
    <Section name="Greyscale" colours={GREYSCALE_COLOURS} />
    {Object.keys(SECONDARY).map(key => (
      <Section key={key} name={key} colours={SECONDARY[key]} />
    ))}
  </div>
);

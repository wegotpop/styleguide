import React from 'react';
import { ChromePicker as Picker } from 'react-color';

import tableStyles from '../css/tables.css';
import styles from './css/ThemeBuilder.css';
import * as themeManager from '../themeManager';

const VARIABLES = [
  ['Disabled', 'disabled'],
  ['Brand one', 'brand-one'],
  ['Brand two', 'brand-two'],
  ['Brand main', 'brand-main'],
  ['Brand three', 'brand-three'],
  ['Brand four', 'brand-four'],
  ['Secondary one', 'secondary-one'],
  ['Secondary two', 'secondary-two'],
  ['Info', 'action-info'],
  ['Positive', 'action-positive'],
  ['Warning', 'action-warning'],
  ['Error', 'action-error'],
  ['Black', 'black'],
  ['greyscale one', 'greyscale-one'],
  ['greyscale two', 'greyscale-two'],
  ['greyscale three', 'greyscale-three'],
  ['greyscale four', 'greyscale-four'],
  ['white', 'white'],
];

class ColourPicker extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { open: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ open: !this.state.open });
  }

  onChange({ hex }) {
    document
      .querySelector(':root')
      .style.setProperty(`--${this.props.name}`, hex);
    themeManager.saveValue(this.props.name, hex);
  }

  getPropertyValue(name) {
    return getComputedStyle(document.querySelector(':root')).getPropertyValue(
      name,
    );
  }

  render() {
    const { title, name } = this.props;
    const colour = this.getPropertyValue(`--${name}`);
    return (
      <tr>
        <td>
          {title}
          <pre>var(--{name})</pre>
        </td>
        <td>
          {this.state.open ? (
            <React.Fragment>
              <Picker color={colour} onChange={this.onChange} />
              <button onClick={this.onClick}>Close</button>
            </React.Fragment>
          ) : (
            <div
              onClick={this.onClick}
              className={styles.colourBox}
              style={{ backgroundColor: `var(--${name})` }}
            />
          )}
        </td>
      </tr>
    );
  }
}

class ThemeBuilder extends React.Component {
  render() {
    return (
      <div>
        <h4>Theme builder</h4>
        <button onClick={themeManager.resetTheme}>Reset</button>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <td>Property</td>
              <td>Colour</td>
            </tr>
          </thead>
          <tbody>
            {VARIABLES.map(([title, name]) => (
              <ColourPicker title={title} name={name} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ThemeBuilder;

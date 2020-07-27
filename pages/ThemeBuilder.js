import React from 'react';
import { ChromePicker as Picker } from 'react-color';

import styles from './css/ThemeBuilder.css';
import * as themeManager from '../themeManager';

const VARIABLES = [
  '--disabled',
  '--brand-one',
  '--brand-two',
  '--brand-main',
  '--brand-three',
  '--brand-four',
  '--black',
  '--greyscale-one',
  '--greyscale-two',
  '--greyscale-three',
  '--greyscale-four',
  '--greyscale-five',
  '--white',
  '--secondary-one',
  '--secondary-two',
  '--action-info',
  '--action-positive',
  '--action-warning',
  '--action-error',
  '--font-family',
  '--font-size',
  '--link-colour',
  '--blue-one',
  '--blue-two',
  '--blue-main',
  '--blue-three',
  '--blue-four',
  '--purple-one',
  '--purple-two',
  '--purple-main',
  '--purple-three',
  '--purple-four',
  '--green-one',
  '--green-two',
  '--green-main',
  '--green-three',
  '--green-four',
  '--yellow-one',
  '--yellow-two',
  '--yellow-main',
  '--yellow-three',
  '--yellow-four',
  '--red-one',
  '--red-two',
  '--red-main',
  '--red-three',
  '--red-four'
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
      .style.setProperty(`${this.props.name}`, hex);
    themeManager.saveValue(this.props.name, hex);
  }

  getPropertyValue(name) {
    return getComputedStyle(document.querySelector(':root')).getPropertyValue(
      name
    );
  }

  render() {
    const { name } = this.props;
    const colour = this.getPropertyValue(`--${name}`);
    return (
      <tr>
        <td>
          {name
            .replace('--', '')
            .replace('-', ' ')
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}
          <pre>
            var(
            {name})
          </pre>
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
              style={{ backgroundColor: `var(${name})` }}
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
        <table className="table">
          <thead>
            <tr>
              <td>Property</td>
              <td>Colour</td>
            </tr>
          </thead>
          <tbody>
            {VARIABLES.map(name => (
              <ColourPicker name={name} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ThemeBuilder;

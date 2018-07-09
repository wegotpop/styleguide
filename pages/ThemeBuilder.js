import React from 'react';
import { ChromePicker as Picker } from 'react-color';

import tableStyles from '../css/tables.css';
import styles from './css/ThemeBuilder.css';
import * as themeManager from '../themeManager';

const VARIABLES = [
  ['Disabled', 'disabled'],
  ['Warning', 'warning'],
  ['Brand darker', 'brand-darker'],
  ['Brand dark', 'brand-dark'],
  ['Brand primary', 'brand-primary'],
  ['Brand light', 'brand-light'],
  ['Brand lighter', 'brand-lighter'],
  ['Brand black', 'brand-black'],
  ['Brand darkgrey', 'brand-darkgrey'],
  ['Brand grey', 'brand-grey'],
  ['Brand lightgrey', 'brand-lightgrey'],
  ['Brand lightergrey', 'brand-lightergrey'],
  ['Brand secondary dark', 'brand-secondary-dark'],
  ['Brand secondary', 'brand-secondary'],
  ['Brand-secondary soft', 'brand-secondary-soft'],
  ['Brand feedback success', 'brand-feedback-success'],
  ['Brand feedback warning', 'brand-feedback-warning'],
  ['Brand feedback error', 'brand-feedback-error'],
];

class ColourPicker extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
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
    const colour = this.getPropertyValue(`--${this.props.name}`);
    return (
      <span>
        <Picker color={colour} onChange={this.onChange} />
      </span>
    );
  }
}

class ThemeBuilder extends React.Component {
  renderRow(title, name) {
    return (
      <tr>
        <td>
          {title}
          <pre>var(--{name})</pre>
        </td>
        <td>
          <ColourPicker name={name} />
        </td>
      </tr>
    );
  }

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
            {VARIABLES.map(([name, variable]) =>
              this.renderRow(name, variable),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ThemeBuilder;

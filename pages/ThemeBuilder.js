import React from 'react';
import { ChromePicker as Picker } from 'react-color';

import tableStyles from '../css/tables.css';
import styles from './css/ThemeBuilder.css';
import * as themeManager from '../themeManager';

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
            {this.renderRow('Brand site', 'brand-site')}
            {this.renderRow('Brand site (dark)', 'brand-site-dark')}
            {this.renderRow('Disabled', 'disabled')}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ThemeBuilder;

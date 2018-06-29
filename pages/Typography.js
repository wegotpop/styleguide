import React from 'react';
import tableStyle from '../css/tables.css';

export default () => {
  return (
    <div>
      <h2>Typography</h2>
      <p>
        Roboto is the foundation type family in all POP applications. With a
        wide range of weights, and a large diverse character set, the uniform
        simplicity and legibility over other font families makes ROBOTO a great
        compliment to POP applications
      </p>
      <div>
        <table className={tableStyle.table}>
          <tbody>
            <tr>
              <td>
                <h1>Heading Level 1</h1>
              </td>
              <td>
                <strong>H1</strong> - 39px, light weight;
              </td>
            </tr>

            <tr>
              <td>
                <h2>Heading Level 2</h2>
              </td>
              <td>
                <strong>H2</strong> - 36px, regular weight;
              </td>
            </tr>

            <tr>
              <td>
                <h3>Heading Level 3</h3>
              </td>
              <td>
                <strong>H3</strong> - 26px, bold weight;
              </td>
            </tr>

            <tr>
              <td>
                <h4>Heading Level 4</h4>
              </td>
              <td>
                <strong>H4</strong> - 24px, bold weight;
              </td>
            </tr>

            <tr>
              <td>
                <h5>Heading Level 5</h5>
              </td>
              <td>
                <strong>H5</strong> - 20px, bold weight, uppercase;
              </td>
            </tr>

            <tr>
              <td>
                <h6>Heading Level 6</h6>
              </td>
              <td>
                <strong>H6</strong> - 18px, bold weight;
              </td>
            </tr>

            <tr>
              <td>Body</td>
              <td>Standard font size - 18px</td>
            </tr>
            <tr>
              <td>Body light</td>
              <td>Standard font size - 18px light weight</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

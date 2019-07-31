import React from 'react';
import tableStyle from '../css/tables.css';

const remCalculator = elementName => {
  let pixels;
  try {
    const elem = document.querySelector(elementName);
    pixels = getComputedStyle(elem).getPropertyValue('font-size');
  } catch (e) {
    /* hack around the fact that the elements may not be in the DOM yet
  Create the element, attach it to the DOM, then perform any calculations.
  Finally tidy up, by removing the newly created element
  */
    const elem = document.createElement(elementName);
    document.body.appendChild(elem);
    pixels = getComputedStyle(elem).getPropertyValue('font-size');
    elem.remove();
  }

  const x = parseFloat(pixels);
  const y = parseFloat(
    getComputedStyle(document.querySelector(':root')).getPropertyValue(
      'font-size'
    )
  );

  return x / y;
};

// TODO: CreateElement doesn't work
export default () => {
  return (
    <div>
      <section>
        <h1>Typography</h1>
      </section>
      <section>
        <h2>Font Family</h2>
        <p>
          Roboto is the foundation type family in all POP applications. With a
          wide range of weights, and a large diverse character set, the uniform
          simplicity and legibility over other font families makes ROBOTO a
          great compliment to POP applications
        </p>
        <h3>Implementation</h3>
        <p>Include the following tag in the site header</p>
        <code>
          {
            '<link rel="stylesheet" type="text/css" media="screen,print" href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500">'
          }
        </code>
      </section>
      <section>
        <h2>Examples</h2>
        <table className={tableStyle.table}>
          <tbody>
            <tr>
              <td>
                <h1>Heading Level 1</h1>
              </td>
              <td>
                <strong>H1</strong> - {remCalculator('h1')}
                rem, light weight
              </td>
            </tr>

            <tr>
              <td>
                <h2>Heading Level 2</h2>
              </td>
              <td>
                <strong>H2</strong> - {remCalculator('h2')}
                rem, light weight
              </td>
            </tr>

            <tr>
              <td>
                <h3>Heading Level 3</h3>
              </td>
              <td>
                <strong>H3</strong> - {remCalculator('h3')}
                rem, light weight
              </td>
            </tr>

            <tr>
              <td>
                <h4>Heading Level 4</h4>
              </td>
              <td>
                <strong>H4</strong> - {remCalculator('h4')}
                rem, light weight
              </td>
            </tr>

            <tr>
              <td>
                <h5>Heading Level 5</h5>
              </td>
              <td>
                <strong>H5</strong> - {remCalculator('h5')}
                rem, light weight
              </td>
            </tr>

            <tr>
              <td>Base</td>
              <td>
                Standard font size - {remCalculator(':root')}
                rem
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

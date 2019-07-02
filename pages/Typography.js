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
      </div>

      <section>
        <h4>Usage</h4>
        <code>
          {
            '<link rel="stylesheet" type="text/css" media="screen,print" href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500">'
          }
        </code>
      </section>
      <section>
        <h3>Spacing</h3>
        <div>
          <p>
            Spacing, also known as white space, is the empty space between and
            around individual elements of a page layout; these elements could be
            pieces of copy, images, cards, buttons, icons, etc. When used
            correctly, white space brings visual clarity and balance to a
            layout. White space can also greatly improve the readability of a
            page or an element.
          </p>
          <p>
            Our guideline rule states that the spacing between every design
            element should be a multiple of 0.5rem. This rule brings
            intentionality to our use of white space and creates visual
            consistency across our site experience.
          </p>
        </div>
      </section>
    </div>
  );
};

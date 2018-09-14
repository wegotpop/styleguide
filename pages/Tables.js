import React from 'react';
import Hierarchical from './assets/tables/hierarchical.png';
import Interactive from './assets/tables/interactive.png';
import Intuitive from './assets/tables/intuitive.png';
import Anatomy from './assets/tables/anatomy.png';
import FixedTable from './assets/tables/fixedTable.png';
import styles from './css/tables.css';

export default () => {
  return (
    <div>
      <h3>Tables and lists</h3>
      <p>
        Use a table when displaying tabular data, or comparing data both
        vertically and horizontally.
      </p>
      <section>
        <div>
          <ul style={{ padding: '2rem' }}>
            <li>
              Tables should extend to 100% of the available space of the card;
            </li>
            <li>
              Data should aligned left, unless it’s a label then the data should
              be center aligned;
            </li>
            <li>
              Column headings should always match the text alignment of the data
              in the column;
            </li>
            <li>Columns should be presented in a logical order;</li>
            <li>Primary data should appear in column 1;</li>
            <li>Row actions, such as delete, should be in the last column;</li>
            <li>Checkboxes should be in the first column.</li>
          </ul>
        </div>
      </section>
      <section>
        <table>
          <tbody>
            <tr>
              <td>
                <img className={styles.image} src={Hierarchical} />
              </td>
              <td>
                <img className={styles.image} src={Interactive} />
              </td>
              <td>
                <img className={styles.image} src={Intuitive} />
              </td>
            </tr>
            <tr>
              <td>
                <h5>Hierarchical</h5>
                <p>
                  Data table content should be hierarchical, alphabetical, or
                  similarly organized.
                </p>
              </td>
              <td>
                <h5>Interactive</h5>
                <p>
                  Data tables should allow user interaction, so that users can
                  sort information in custom ways.
                </p>
              </td>
              <td>
                <h5>Intuitive</h5>
                <p>
                  Data tables should work intuitively, allowing users to focus
                  on the content, not the structure.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>Anatomy</h3>
        <div>
          Data tables can include three or more columns. A header row at the top
          lists column names, and all subsequent rows contain data. If users
          need to interact with row data, checkboxes should accompany each row.
        </div>
        <div>
          <img style={{ width: '100%' }} src={Anatomy} />
        </div>
        <div>
          <ol>
            <li>
              <h4>Container</h4>
              Container holds all data table content.
            </li>
            <li>
              <h4>Column title</h4>
              if necessary a table can contain a title.
            </li>
            <li>
              <h4>Column header</h4>
              Column headers are titles for the column content.
            </li>
            <li>
              <h4>Sorting tool</h4>
              Sorting tools allow users to reorder the table content.
            </li>
            <li>
              <h4>Table content</h4>
              Table contains raw data.
            </li>
            <li>
              <h4>Row checkbox</h4>
              To allow users to select a row and perform an action.
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h3>Fixed tables</h3>
        <div>
          Fixed tables should contain a width bar to be able to scroll through
          the right once the user clicks in the container
        </div>
        <img style={{ width: '100%' }} src={FixedTable} />
      </section>
      <section>
        <h3>Sorting and filtering</h3>
        <div>
          Table related actions like sorting and filtering should be kept on the
          table container as a header.
        </div>
      </section>
    </div>
  );
};

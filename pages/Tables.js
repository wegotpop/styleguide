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
      <h3>Tables</h3>
      <h4>Overview</h4>
      <p>
        Tables are good for managing large amounts of data. These layouts work
        well when users need to scan for patterns or compare data.
      </p>
      <section>
        <h4>Principles</h4>
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
                  Table content should be organized in a meaningful way for
                  users.
                </p>
              </td>
              <td>
                <h5>Interactive</h5>
                <p>
                  Tables should allow user interaction, so that users can sort
                  or filter information in custom ways.
                </p>
              </td>
              <td>
                <h5>Intuitive</h5>
                <p>
                  Data tables be intuitive and focus on the basics to increase
                  ease of learning for the novice users.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h4>Positioning</h4>
        <table>
          <tr>
            <td>
              <h5>Table actions</h5>
              <p>
                To improve visibility actions should either sit at the top or
                both at the top and bottom of the table.
              </p>
            </td>
            <td>
              <h5>Pagination</h5>
              <p>Pagination is placed at the bottom left side of a table.</p>
            </td>
          </tr>
        </table>
      </section>

      <section>
        <h4>Behaviour</h4>
        <h5>Controls</h5>
        <p>
          <b>Baseline elements:</b>
          <ul>
            <li>
              <b>Column header</b> - Column headers are titles for the column
              content.
            </li>
            <li>
              <b>Table content</b> - Table content displays all the raw data. As
              default tables use 25 rows per page.
            </li>
            <li>
              <b>Table pagination</b> - Table pagination is a simple navigation
              method that lets you split a huge amount of content while
              indicating that more pages exist.
            </li>
          </ul>
        </p>
        <p>
          {' '}
          <b>Interactive elements:</b>
          <ul>
            <li>
              <b>Row selection</b> - Allows users to select a row and perform an
              action. When a row checkbox is selected, the row should display a
              background color and the number rows currently selected.
            </li>
            <li>
              <b>Bulk selections</b> - Allows users to select all of the rows on
              the table, to select only the visible rows or to deselect all
              rows.
            </li>
            <li>
              <b>Sorting tool</b> - To help users sort information, a column can
              display column sorting by default. For custom sorting, place a
              sort button at the top of the table with the description of the
              header name.
            </li>
            <li>
              <b>Filtering tool</b> - Filtering tools allow users to limit the
              data displayed within a long table. There are 2 ways of using
              filters on a table.
              <ul>
                <li>
                  <b>Column filtering</b> - A filter for each column located
                  below the column header. Only search and single dropdown
                  single selection are allowed.
                </li>
                <li>
                  <b>Expandable filtering</b> - An expandable filter button
                  located at the top of the table. Note that custom filtering
                  has to be built from scratch.
                </li>
              </ul>
            </li>
          </ul>
        </p>
      </section>
      <section>
        <h4>Content</h4>
        <ul>
          <li>
            Table content should be aligned left, unless it’s a status then the
            data should be center aligned
          </li>
          <li>
            Column headings should be in bold and always match the text
            alignment of the data in the column
          </li>
          <li>
            Columns usually start with the person’s name or with an aggregate
            information ID:Person’s name.
          </li>
          <li>
            Checkboxes should be in the first column as it puts the selection
            mechanism near the beginning of the label, so users don't tend to
            read the entire label but scan it instead
          </li>
          <li>Row actions, such as delete, should be in the last column</li>
          <li>Rows should be highlighted when hovered</li>
          <li>
            Links allow access to other pages. Aim to reduce the links to as few
            as possible, in order to focus the user's attention on primary
            information.
          </li>
        </ul>

        <div>
          <h5>Empty tables</h5>
          <p>Empty tables display no data.</p>
        </div>
        <div>
          <h5>Overflows</h5>
          <ul>
            <li>
              <b>Fixed tables</b> - Fixed tables overflow on the screen.
            </li>
            <li>
              <b>Responsive tables</b> - Responsive tables allow tables to be
              scrolled horizontally with ease. Make any table responsive across
              all viewports by wrapping a .table with .table-responsive. Or,
              pick a maximum breakpoint with which to have a responsive table up
              to by using .table-responsive{'-sm|-md|-lg|-xl'}.
            </li>
          </ul>
          <p>
            Note: Text wrapping applies by default on both views and it wraps
            the text in different lines on a row.
          </p>
        </div>

        <div>
          <h5>Anatomy</h5>
          <p>
            A table is composed by it’s basic table elements. If users need to
            interact with the table, additional elements can be added.
          </p>
          <b>Table elements:</b>
          <ul>
            <li>
              Column header - Column headers are titles for the column content.
            </li>
            <li>
              Table content - Table content displays all the raw data. As
              default tables use 25 rows per page.
            </li>
            <li>
              Table pagination - Table pagination is a simple navigation method
              that lets you split a huge amount of content while indicating that
              more pages exist.
            </li>
          </ul>

          <b>Interactive elements:</b>
          <ul>
            <li>
              <b>Table title</b> - Used to differentiate between multiple
              elements or multiple tables on the same page.
            </li>
            <li>
              <b>Badges</b> - Badges are coloured pills to display statuses on a
              table.
            </li>
            <li>
              <b>Editable tables</b> - Editable tables allow the user to
              manipulate data on a different page. It is great for the entry of
              tabular data like in the case of a spreadsheet. To enter edit mode
              provide an Edit button on the top of the page. Clicking Save or
              Cancel will bring you back to the view mode.
            </li>
          </ul>
        </div>
        <div>
          <h5>Mobile</h5>
          <p>
            On mobile screens, users can only see a small portion of the large
            data on the table, additional considerations have to be made to find
            out what should be the user-specified criteria to allow them to view
            the data in a meaningful way.
          </p>
          <b>Currently we have 2 ways of displaying tables on mobile:</b>
          <ul>
            <li>
              <b>Responsive/Scroll</b>
              <p>
                This solution is not quite responsive but it’s our default
                solution and fast for development. It’s just about using swipe
                gestures to scroll through the whole table horizontally.
              </p>
            </li>

            <li>
              <b>Transformed</b>
              <p>
                A more versatile form of data presentation is a transformed
                table. On smaller screens, the tabled data will display as
                separate rows, repeating the header titles on each line for
                consistency.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

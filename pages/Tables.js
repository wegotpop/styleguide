import React from 'react';

export default () => {
  return (
    <div>
      <h3>Tables and lists</h3>
      <p>
        Use a table when displaying tabular data, or comparing data both
        vertically and horizontally.
      </p>
      <p>
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
      </p>
    </div>
  );
};

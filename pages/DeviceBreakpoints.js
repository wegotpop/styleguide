import React from 'react';

export function DeviceBreakpoints() {
  return (
    <main>
      <h1>Device Breakpoints</h1>
      <p>
        These are the breakpoints used with in POP, to target different device
        sizes. These should be used as the max-width, when targeting a
        particular screen size.
      </p>
      <table>
        <thead>
          <th>Type</th>
          <th>CSS Variable</th>
          <th>Value</th>
        </thead>
        <tbody>
          <tr>
            <td>Small</td>
            <td>
              <code>--breakpoint-small</code>
            </td>
            <td>480px</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>
              <code>--breakpoint-medium</code>
            </td>
            <td>768px</td>
          </tr>
          <tr>
            <td>Large</td>
            <td>
              <code>--breakpoint-large</code>
            </td>
            <td>992px</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

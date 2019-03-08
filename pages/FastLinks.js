import React from 'react';

export function FastLinks() {
  return (
    <main>
      <h1>Fast links</h1>
      <p>
        These are inline navigation links that link together related pages such
        as the children of the project record.
      </p>
      <p>They should appear immediately after the page heading</p>

      <h3 className="mb1">Example</h3>
      <nav className="navigation-fast-links-wrapper">
        <ul className="navigation-fast-links">
          <li className="navigation-fast-links__fast-link-item navigation-fast-links__prelink-text">
            Go to:
          </li>
          <li className="navigation-fast-links__fast-link-item">
            <a className="navigation-fast-links__fast-link-item__link" href="#">
              Item one
            </a>
          </li>
          <li className="navigation-fast-links__fast-link-item">
            <a className="navigation-fast-links__fast-link-item__link" href="#">
              Item two
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}

import React from 'react';

export function NavigationPage() {
  return (
    <main>
      <h1>Navigation Pages</h1>
      <p>
        This pages exist to simplify navigation from different sections of the
        website. They are useful when you have a large number of potential
        onwards journies that no longer work effectively in navigation bars.
      </p>
      <ul className="navigation-page-links">
        <li>
          <a href="#">Page one</a>
        </li>
        <li>
          <a href="#">Page two</a>
        </li>
      </ul>
    </main>
  );
}

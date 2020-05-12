import React from 'react';

export function Tabs() {
  return (
    <main>
      <section>
        <h1>Tabs</h1>
        <p>
          Tabs are used to alternate between views that require the same
          context; rather than duplicating page headers, we can use tabs to
          loads in different content and action.
        </p>
        <hr />
      </section>
      <section>
        <h2>Principles</h2>
        <ul>
          <li>
            Scalable - as tabs are scrollable, the container can be any width
          </li>
          <li>Each tab should be navigable via a distinct URL</li>
        </ul>
      </section>
      <section>
        <h2>Positioning</h2>
        <p>
          When required, tabs should be positioned above the page header (which
          remains persistent between tabs) and above all other page content
          including action buttons, which will be individual to the content of
          each tab.
        </p>
      </section>
      <section>
        <h2>Example</h2>
        <ul class="nav nav-tabs">
          <li class="active" role="presentation">
            <a href="#">Tab 1</a>
          </li>
          <li role="presentation">
            <a href="#">Tab 2</a>
          </li>
          <li role="presentation">
            <a href="#">Tab 3</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

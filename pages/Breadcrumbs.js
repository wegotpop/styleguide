import React from 'react';

export function Breadcrumbs() {
  return (
    <main>
      <section>
        <h1>Breadcrumbs</h1>
        <p>
          Use breadcrumbs to indicate the structural relationship between the
          page you're on and its parent. Where relevant permissions allow, link
          to the parent page(s).
        </p>
        <hr />
      </section>
      <section>
        <h2>Principles</h2>
        <h5>Do</h5>
        <ul>
          <li>
            Breadcrumbs should visualise the structural relationships between
            the page you are viewing and it’s parent
          </li>
          <li>
            If the user has the appropriate permissions, each step of the
            breadcrumb should link
          </li>
          <li>
            Separate breadcrumbs with a <code>/</code>
          </li>
        </ul>
        <h5>Don't</h5>
        <ul>
          <li>
            While breadcrumbs can be used as navigation, do not use them to
            indicate progression through a linear flow; rather they are used to
            display the structure of the directory
          </li>
          <li>Display the label from the active tab in the breadcrumb</li>
        </ul>
      </section>
      <section>
        <h2>Example(s)</h2>
        <code>Project Name / Message Overview / New Message / Attachments</code>
      </section>
      <section>
        <h2>Links Permissions</h2>
        <p>
          When a user has the relevant permission to view the page, the
          breadcrumb should link to the page.
        </p>
        <p>
          Since breadcrumbs provide a navigation, it’s a good idea to add a
          meaningful label such as <code>aria-label="breadcrumb"</code> to
          describe the type of navigation provided in the &lt;nav&gt; element,
          as well as applying an <code>aria-current="page"</code> to the last
          item of the set to indicate that it represents the current page.
        </p>
      </section>
    </main>
  );
}

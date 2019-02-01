import React from 'react';

import { ProjectPageHeading } from './components/ProjectPageHeading';

export function PageHeadings() {
  return (
    <main>
      <h1>Page headings</h1>
      <p>
        Page headings are implemented by a <code>h1</code> element and use
        titlecase by default. Configuration and historic headings may be
        different.
      </p>
      <h1>This Is A Page Heading</h1>
      <p>
        If the project or activity name is required in the heading it should
        always be the first element in the heading and separated from the rest
        of the heading by a forward slash.
      </p>

      <h1>Big Project / My Page Heading</h1>

      <p>Ideally a project name should also have an adjacent film strip icon</p>

      <h1>
        <span className="fas fa-film mr1" />
        Big Project / My Page Heading
      </h1>

      <p>If a page heading has a link then the heading should be in a block</p>

      <ProjectPageHeading
        projectName="Big Project"
        projectUrl="#"
        pageHeading="My Page Heading"
      />

      <h2>Notes</h2>
      <p>
        Historically we have put buttons in a heading but we should no longer do
        this.
      </p>
    </main>
  );
}

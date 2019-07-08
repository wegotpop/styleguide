import React from 'react';

export function PageText() {
  return (
    <main>
      <h1>Page Text</h1>
      <h2>Help text</h2>
      <p>Help text should be clear, legible but non-intrusive</p>
      <p>
        This version is modelled after the help text that is used on Bootstrap
        3's form groups.
      </p>

      <p>It should occur after a heading and before the content of the page.</p>

      <p>
        Any links in help text should be marked with a tabindex of -1 to remove
        them them from the page's tabbed navigation.
      </p>

      <h2 className="mb3">Example</h2>

      <hr />

      <h1>The Title of the Page</h1>
      <div className="page-help-text">
        <p>
          A description of what the page is for and the kind of thing you should
          find to expect on it.
        </p>
        <p>
          A link to{' '}
          <a href="#" tabIndex={-1}>
            further, in-depth information
          </a>
          .
        </p>
      </div>

      <p>
        This would then be body copy, with a <a href="#">content link</a>.
      </p>

      <hr />
    </main>
  );
}

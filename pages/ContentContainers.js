import React from 'react';
import panelStyles from '../css/panel.css';

export default () => (
  <div>
    <h2>Content Container (Panels)</h2>
    <p>
      Primary containers often hold dashboard widgets, charts, or other
      information on a page. They're most often used to segment information on a
      dashboard, review harness, or landing page.
    </p>
    <br />
    <div class={panelStyles.panel}>
      <div className={panelStyles['panel-heading']}>
        <h3>Heading goes here</h3>
      </div>
      <div className={panelStyles['panel-body']}>
        Content
        <br />
        More content
        <br />
        Even more content
      </div>
    </div>
  </div>
);

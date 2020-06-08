import React from 'react';
import panelStyles from '../css/panel.css';

export default () => {
  return (
    <div>
      <section>
        <h1>Panels</h1>
        <p>
          Panels are a pattern for grouping like content into a visual
          container. Primary containers often hold dashboard widgets, charts, or
          other information on a page. They're most often used to segment
          information on a dashboard or landing page.
        </p>
        <hr />
      </section>
      <section>
        <h2>Principles</h2>
        <br />
        <h5>Single Subject</h5>
        <p>
          A panel can contain multiple different elements, but they should all
          relate to a single subject.
        </p>
        <h5>Hierarchy</h5>
        <p>
          Hierarchy within panels should help direct the attention of users to
          the most important information. Place primary content at the top of
          the panel and use title headers or dividers to separate content areas
          that need more distinct visual separation.
        </p>
      </section>
      <section>
        <h2>Positioning</h2>
        <br />
        <h3>Panel Collection</h3>
        <p>
          When multiple panels with the same context are present, they are
          grouped together into one collection. To make a collection of panels
          scannable, align them and place them in a consistent pattern. The
          first panel of a collection should be positioned on the top left
          corner and subsequent panels from left to right followed by top to
          bottom.
        </p>
      </section>
      <section>
        <h2>Behaviour</h2>
        <ul>
          <li>Content extends to 100% of the table width</li>
          <li>Avoid cluttering the panel with too many calls to action</li>
        </ul>
        <h3>Basic Panels</h3>
        <p>
          A panel is usually made up of 2 sections; a header and a body. The
          body section can accommodate any layout of related information.
        </p>
        <ul>
          <li>
            Header; The header area can be used to provide context to the panel.
            The header is optional and not required.
          </li>
          <li>Body; The body of the panel is where the main content goes.</li>
          <li>
            Footer; The footer area is optional and it can be used to provide
            final calls to actions, or navigational elements.
          </li>
        </ul>
        <h5>Example</h5>
        <div className="panel panel-default" id="my-panel">
          <div className="panel-heading">
            <h3>This is the Panel Header</h3>
          </div>
          <div className="panel-body">
            This is the panel body, where content and links are placed
          </div>
        </div>
        <br />
        <h3>Expandable Panels</h3>
        <p>
          Multiple panels stacked on top of each other make information that is
          located below the fold hard to reach. To ensure that the content is
          easy to reach and to allow a better user focus use expandable panels.
        </p>
        <h5>Example</h5>
        <p>example TBC</p>
        <br />
        <h3>Panels with Tables</h3>
        <p>
          Tables within a panel make easy to differentiate content and also help
          define a container area for responsive tables that make use of the
          horizontal scroll.
        </p>
        <h5>Example</h5>
        <div>
          <div className="panel panel-default" id="my-panel">
            <div className="panel-heading">
              <h3>This is the Panel Header</h3>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>First</th>
                  <th>Second</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First</td>
                  <td>Second</td>
                </tr>
                <tr>
                  <td>First</td>
                  <td>Second</td>
                </tr>
                <tr>
                  <td>First</td>
                  <td>Second</td>
                </tr>
                <tr>
                  <td>First</td>
                  <td>Second</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <h3>Panels with Lists</h3>
        <p>
          List panels are a great way to showcase items that need to be ordered
          in a list. They are a combination of a basic panel with list panel as
          the content. We often use them for dashboard widgets but they are very
          flexible and can have many uses.
        </p>
        <h5>Example</h5>
        <p>example TBC</p>
        <br />
        <h3>Panels with Forms</h3>
        <p>
          Panels can contain forms for user input. The general rule is to keep
          the final call to action left aligned with the form. This ensures that
          even if the panel grows horizontally the button will be inline with
          the user’s eye tracking as they work down the form.
        </p>
        <h5>Example</h5>
        <div className="panel panel-default" id="my-panel">
          <div className="panel-heading">
            <h3>This is the Panel Header</h3>
          </div>
          <div className="panel-body">
            <p>This is the panel body, where content and links are placed</p>
            <div className="form-group">
              <label htmlFor="my-input" className="field-required">
                Label for the Input
              </label>
              <input type="text" name="my-input" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="my-input" className="field-required">
                Another Input
              </label>
              <input type="text" name="my-input" className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
        <br />
        <h3>Panels with contextual alternatives</h3>
        <p>
          Like other components, easily make a panel more meaningful to a
          particular context by adding any of the contextual state classes such
          as information or warning highlighting the header with it’s status
          colour.
        </p>
        <h5>Example</h5>
        <p>example TBC</p>
      </section>
      <section>
        <h2>Mobile</h2>
        <br />
        <p>
          On mobile screens, panels should take full width to benefit the
          smaller screens.
        </p>
      </section>
    </div>
  );
};

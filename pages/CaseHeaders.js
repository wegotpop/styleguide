import React from 'react';
import CaseHeaders from './assets/caseHeaders.png';

export default () => (
  <div>
    <h2>Case Headers</h2>
    <p>
      Case headers inform the user of what object in the system they are looking
      at. These headers usually contain actions that a user can perform on that
      object. Other header elements (icon, status badge, etc.) are optional and
      should be used when the use case requires them.
    </p>
    <section>
      <img src={CaseHeaders} />
    </section>
  </div>
);

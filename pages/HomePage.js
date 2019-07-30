import React from 'react';

export function HomePage() {
  return (
    <div>
      <section>
        <h1>We Got POP - Style guide</h1>
        <p>
          Predictable, consistent design enables users to focus on the task at
          hand, rather than how to use our service. This Styleguide covers the
          look and feel of the POP environment its components.
        </p>
        <hr />
      </section>
      <section>
        <h2>Environment</h2>
        <p>
          The environment for all POP’s services is based on the guidelines of
          Google’s Material Design; the depth, attributes and behaviour of all
          components are designed to emulate real-world behaviours.
        </p>
        <p>
          Surfaces; objects cannot occupy the same space simultaneously, nor
          pass through each other. Objects can change shape and move along any
          axis. Their motion can be independent, or synchronised.
        </p>
        <p>
          Depth; elevation is used to provide a visual hierarchy. Items in the
          foreground take precedence over those in the background and scrims can
          be used to provide focus. Shadows are used to express elevation and
          must be used consistently. Shadow size reflects elevation; higher
          elevation casts larger shadows.
        </p>
      </section>
    </div>
  );
}

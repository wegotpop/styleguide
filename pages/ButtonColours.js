import React from 'react';
import ButtonDiagram from './assets/button-diagram.svg';
import styles from './css/ButtonPage.css';
import { ButtonExample } from './components/ButtonExample';

export default () => {
  return (
    <div>
      <section>
        <h3>Colours</h3>
        <br />
        <ButtonExample
          label="Default/Secondary Action"
          colour="White"
          cssClass="btn-default"
          blurb="This is the default button colour; unless a button requires "
        />

        <ButtonExample
          label="Primary Action"
          colour="Teal"
          cssClass="btn-primary"
          blurb="Teal colour is the defaut colour across platform, associated with primary actions."
        />

        <ButtonExample
          label="Info"
          colour="Blue"
          cssClass="btn-info"
          blurb="Blue colour is associated with secondary actions that don't afect your workflow and that are considered as safe"
        />

        <ButtonExample
          label="Success"
          colour="Green"
          cssClass="btn-success"
          blurb="Green colour is associated with positive actions on the platform."
        />

        <ButtonExample
          label="Warning"
          colour="Yellow"
          cssClass="btn-warning"
          blurb=""
        />

        <ButtonExample
          label="Danger"
          colour="Red"
          cssClass="btn-danger"
          blurb="Red colour is associated with negative or destructive actions that have an immediate affect on the workflow."
        />
      </section>
    </div>
  );
};

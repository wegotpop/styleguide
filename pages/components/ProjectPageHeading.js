import React from 'react';
import styles from './ProjectPageHeading.css';

export function ProjectPageHeading(props) {
  return (
    <h1 className={styles['project-page-heading']}>
      <span className="fas fa-film mr1" />
      <a href={props.projectUrl}>{props.projectName}</a> / {props.pageHeading}
    </h1>
  );
}

import React from 'react';
import badgeStyles from '../css/badge.css';
import className from 'classname';
import pageStyles from './css/BadgesPage.css';

function badge(name, style) {
  return (
    <div className={pageStyles.item}>
      <span
        className={className(badgeStyles.badge, badgeStyles[`badge-${style}`])}
      >
        {name}
      </span>
      <div>
        class: <code>.badge {style && `.badge-${style}`}</code>
      </div>
    </div>
  );
}

export function Badges() {
  return (
    <div>
      <h2>Badges</h2>
      {badge('Default')}
      {badge('Positive', 'positive')}
      {badge('Info', 'info')}
      {badge('Warning', 'warning')}
      {badge('Strong Warning', 'strong-warning')}
      {badge('Error', 'error')}
    </div>
  );
}

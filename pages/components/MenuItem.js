import React from 'react';

import linkStyles from '../../css/link.css';

export const MenuItem = ({ href, title, onClick }) => {
  return (
    <li>
      {window.location.pathname === href ? '¬ ' : ' '}
      <a
        className={linkStyles.link}
        href={href}
        onClick={e => {
          e.preventDefault();
          onClick(href);
        }}
      >
        {title}
      </a>
    </li>
  );
};

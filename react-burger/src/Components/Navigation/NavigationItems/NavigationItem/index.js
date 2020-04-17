import React from 'react';
import { active, NavigationItem } from './NavigationItem.module.css';

const navigationItem = ({ link, active: isActive, children }) => (
  <li className={NavigationItem}>
    <a
      href={link}
      className={isActive ? active : null}>
      { children }
    </a>
  </li>
);

export default navigationItem;

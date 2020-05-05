import React from 'react';
import { NavLink } from 'react-router-dom';
import { active, NavigationItem } from './NavigationItem.module.css';

const navigationItem = ({ link, active: isActive, children }) => (
  <li className={NavigationItem}>
    <NavLink
      to={link}
      activeClassName={active}
      exact
      >
      { children }
    </NavLink>
    {/* <a
      href={link}
      className={isActive ? active : null}>
      { children }
    </a> */}
  </li>
);

export default navigationItem;

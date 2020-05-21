import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToogle';
import classes, { DesktopOnly, Toolbar } from './Toolbar.module.css';

const toolbar = ({ click, isAuthenticated }) => (
  <header className={Toolbar}>
    <DrawerToggle click={click} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={DesktopOnly}>
      <NavigationItems isAuthenticated={isAuthenticated} />
    </nav>
  </header>
);

export default toolbar;

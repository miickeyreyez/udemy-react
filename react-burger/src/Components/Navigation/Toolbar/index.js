import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToogle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle click={props.click} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav class={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;

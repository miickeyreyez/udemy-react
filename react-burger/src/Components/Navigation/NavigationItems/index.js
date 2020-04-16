import React from 'react';
import NavigationItem from './NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="" active>Burger Builder</NavigationItem>
    <NavigationItem link="">Checkout</NavigationItem>
    {/* {props.items.map((item) => <NavigationItem />)} */}
  </ul>
);

export default navigationItems;

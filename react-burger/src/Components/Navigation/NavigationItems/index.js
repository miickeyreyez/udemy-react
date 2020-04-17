import React from 'react';
import NavigationItem from './NavigationItem';
import { NavigationItems } from './NavigationItems.module.css';

const navigationItems = () => (
  <ul className={NavigationItems}>
    <NavigationItem link="" active>Burger Builder</NavigationItem>
    <NavigationItem link="">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;

import React from 'react';
import NavigationItem from './NavigationItem';
import { NavigationItems } from './NavigationItems.module.css';

const navigationItems = ({ isAuthenticated }) => (
  <ul className={NavigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    { isAuthenticated && <NavigationItem link="/orders">Orders</NavigationItem> }
    { isAuthenticated ?        
        <NavigationItem link="/logout">Logout</NavigationItem> :
        <NavigationItem link="/auth">Authenticate</NavigationItem>
    }
  </ul>
);

export default navigationItems;

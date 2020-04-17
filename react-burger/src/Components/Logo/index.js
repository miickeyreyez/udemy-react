import React from 'react';
import { Logo } from './Logo.module.css';
import burgerLogo from '../../assets/images/logo.png';

const logo = () => (
  <div className={Logo}>
    <img src={burgerLogo} alt="logo" />
  </div>
);

export default logo;

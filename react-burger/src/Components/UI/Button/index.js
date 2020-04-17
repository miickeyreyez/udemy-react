import React from 'react';
import classes, { Button } from './Button.module.css';

const button = ({ btnType, click, children }) => (
  <button
    className={[Button, classes[btnType]].join(' ')}
    onClick={click}>
      {children}
  </button>
);

export default button;

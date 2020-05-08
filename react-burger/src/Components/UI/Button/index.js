import React from 'react';
import classes, { Button } from './Button.module.css';

const button = ({ btnType, click, children, disabled }) => (
  <button
    className={[Button, classes[btnType]].join(' ')}
    disabled={disabled}
    onClick={click}>
      {children}
  </button>
);

export default button;

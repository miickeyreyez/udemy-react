import React from 'react';
import { BuildControl, Less, Label, More } from './BuildControl.module.css';

const buildControl = ({ add, disabled, label, remove }) => (
  <div className={BuildControl}>
    <div className={Label}>
      { label }
    </div>

    <button
      className={Less}
      onClick={remove}
      disabled={disabled}>
      Less
    </button>

    <button
      className={More}
      onClick={add}>
      More
      </button>
  </div>
);

export default buildControl;

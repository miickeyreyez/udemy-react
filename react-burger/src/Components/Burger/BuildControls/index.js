import React from 'react';
import { CONTROLS } from '../../../Constants';
import BuildControl from '../BuildControl';
import classes from './BuildControls.module.css';

const buildControls = (props) =>
  (
    <div className={classes.BuildControls} >
      <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
      {
        CONTROLS.map((control) => (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]}
          />
        ))
      }
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>
          ORDER NOW
      </button>
    </div>
  );

export default buildControls;

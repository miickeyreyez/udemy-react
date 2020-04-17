import React from 'react';
import { CONTROLS } from '../../../Constants';
import BuildControl from '../BuildControl';
import { BuildControls, OrderButton } from './BuildControls.module.css';

const buildControls = ({ disabled, ingredientToAdd, ingredientToRemove, price, purchase, purchasable }) =>
  (
    <div className={BuildControls} >
      <p>
				Current price: 
				<strong>
					${price.toFixed(2)}
				</strong>
			</p>
      {
        CONTROLS.map(({ label, type }) => (
          <BuildControl
            key={label}
            label={label}
            add={() => ingredientToAdd(type)}
            remove={() => ingredientToRemove(type)}
            disabled={disabled[type]}
          />
        ))
      }
      <button
        className={OrderButton}
        disabled={!purchasable}
        onClick={purchase}>
          ORDER NOW
      </button>
    </div>
  );

export default buildControls;

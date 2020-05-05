import React from 'react';
import { Order } from './Order.module.css';

const order = ({ id, ingredients = {}, totalPrice }) => {
  const ingredientsSumUp = [];
  const ingredientsArray = Object.entries(ingredients);

  ingredientsArray.forEach(([key, value]) => (
    ingredientsSumUp.push(
      <span
        style={{
          border: '1px solid #ccc',
          display: 'inline',
          margin: '0 8px',
          padding: '5px',
          textTransform: 'capitalize',
        }}
        key={key}>
          {`${key} (${value})`}
      </span>
    )
  ));

  return (
    <div className={Order} key={id}>
      <p>Ingredients:</p>
      {ingredientsSumUp}
      <p>Price:<strong>USD {Number.parseFloat(totalPrice).toFixed(2)}</strong></p>
    </div>
  );
};

export default order;

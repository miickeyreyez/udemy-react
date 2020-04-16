import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients';

const burger = (props) => {
  let transformedIngredients = Object
    .keys(props.ingredients)
    .map(
      ig => [...Array(props.ingredients[ig])]
      .map((_, i) => <BurgerIngredient  key={ig + i} type={ig} />)
    )
    .reduce((prev, current) => prev.concat(current), []);
    
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please, add ingredients!</p>
    }
 
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;

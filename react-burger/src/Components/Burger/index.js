import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import { Burger } from './Burger.module.css';

const burger = ({ ingredients }) => {
  let transformedIngredients = Object
    .keys(ingredients)
    .map(
      ig => [...Array(ingredients[ig])]
      .map((_, i) => <BurgerIngredient  key={ig + i} type={ig} />)
    )
    .reduce((prev, current) => prev.concat(current), []);
    
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please, add ingredients!</p>
    }
 
  return (
    <div className={Burger}>
      <BurgerIngredient type='bread-top' />
      { transformedIngredients }
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;

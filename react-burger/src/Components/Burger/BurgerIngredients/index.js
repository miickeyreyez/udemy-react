import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { INGREDIENTS } from '../../../Constants';
import classes from './BurgerIngredients.module.css';

class BurgerIngredient extends Component {
  render () {
    const { type } = this.props;
    const top = 'bread-top';

    if (type === top) {
      return (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
    }
    
    const ingredient = INGREDIENTS[type];
  
    return ingredient
      ? <div className={classes[ingredient]} />
      : null;
  }
}

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;

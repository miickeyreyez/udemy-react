import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { INGREDIENTS } from '../../../Constants';
import classes, { BreadTop, Seeds1, Seeds2 } from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
  render () {
    const { type } = this.props;
    const top = 'bread-top';

    if (type === top) {
      return (
        <div className={BreadTop}>
          <div className={Seeds1} />
          <div className={Seeds2} />
        </div>
      );
    }
    
    const ingredient = INGREDIENTS[type];
  
    return ingredient
      ? <div className={classes[ingredient]} />
      : null;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;

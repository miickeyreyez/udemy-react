import React, { Component } from 'react';
import { INGREDIENTS_PRICE } from '../../../Constants';
import Aux from '../../hoc/Aux';
import Burger from '../../Burger';
import Modal from '../../UI/Modal';
import BuildControls from '../../Burger/BuildControls';
import OrderSummary from '../../Burger/OrderSummary';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 1,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };
  
  componentDidMount () {
    this.isPurchasable(this.state.ingredients);
  }
  
  isPurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ig => ingredients[ig])
      .reduce((sum, el) =>  sum + el, 0);
      
    this.setState({
      purchasable: sum > 0,
    });
  }
  
  addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = this.state.ingredients[type] + 1;
    const newPrice = this.state.totalPrice + (INGREDIENTS_PRICE[type] || 0);

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    
    this.isPurchasable(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    const currentIngredientCount = this.state.ingredients[type] - 1;
    updatedIngredients[type] = currentIngredientCount <= 0 ? 0 : currentIngredientCount;
    const newPrice = this.state.totalPrice - (INGREDIENTS_PRICE[type] || 0);

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasable: false,
    });
    
    this.isPurchasable(updatedIngredients);
  };
  
  purchaseHandler = () => this.setState({ purchasing: true });
  
  purchaseCancelHandler = () => this.setState({ purchasing: false });
  
  purchaseContinueHandler = () => alert('Thanks for purchase');
  
  render() {
    const { ingredients, purchasable, purchasing, totalPrice} = this.state;
    const disabledInfo = {
      ...ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; 
    }

    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}> 
          <OrderSummary
            totalPrice={totalPrice}
            ingredients={ingredients}
            purchased={this.purchaseContinueHandler}
            cancel={this.purchaseCancelHandler} />
        </Modal>

        <Burger ingredients={ingredients} />

        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={totalPrice}
          purchasable={purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

import React, { Component } from 'react';
import { INGREDIENTS_PRICE } from '../../../Constants';
import Aux from '../../hoc/Aux';
import Burger from '../../Burger';
import Modal from '../../UI/Modal';
import Spinner from '../../UI/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler';
import BuildControls from '../../Burger/BuildControls';
import OrderSummary from '../../Burger/OrderSummary';
import axios from '../../axios-orders';


class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };
  
  componentDidMount () {
    axios.get(process.env.REACT_APP_INGREDIENTS_URL)
      .then(response => {
        this.setState({ ingredients: response.data });
        this.isPurchasable(this.state.ingredients);
      })
      .catch((error) => this.setState({ error: true }));
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
  
  purchaseContinueHandler = () => {
    this.setState({ loading: true });
		const { ingredients, totalPrice } = this.state;
		const order = {
			ingredients,
			totalPrice,
			customer: {
				name: 'Angel Reyes',
				address: {
					street: 'Elm street',
					zipCode: '123',
					country: 'USA',
				},
				email: 'angel@firebase.com',
				deliveryMethod: 'fastest',
			},
		};

		axios
			.post('/orders.json', order)
			.then((response) => this.setState({ loading: false, purchasing: false }))
			.catch((error) => this.setState({ loading: false, purchasing: false }));
	};
  
  render() {
    const { error, ingredients, purchasable, purchasing, totalPrice} = this.state;
    const disabledInfo = {
      ...ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; 
    }

    let orderSummary = null;
    let burger = error ? <p>Ingredients cannot be loaded!</p> : <Spinner />;

    if (ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={ingredients} />

          <BuildControls
            ingredientToAdd={this.addIngredientHandler}
            ingredientToRemove={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={totalPrice}
            purchasable={purchasable}
            purchase={this.purchaseHandler}
          />
        </Aux>
      );

      orderSummary = <OrderSummary
        totalPrice={totalPrice}
        ingredients={ingredients}
        purchased={this.purchaseContinueHandler}
        cancel={this.purchaseCancelHandler} />;
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}> 
          { orderSummary }
        </Modal>
        { burger }
      </Aux>
    );
  }
}

export default ErrorHandler(BurgerBuilder, axios);

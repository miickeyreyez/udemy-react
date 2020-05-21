import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { INGREDIENTS_PRICE } from '../../../Constants';
import Aux from '../../hoc/Aux';
import Burger from '../../Burger';
import Modal from '../../UI/Modal';
import Spinner from '../../UI/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler';
import BuildControls from '../../Burger/BuildControls';
import OrderSummary from '../../Burger/OrderSummary';
import axios from '../../../axios-orders';
import { addIngredient, fetchIngredients, removeIngredient, purchaseInit } from '../../../store/actions';

class BurgerBuilder extends Component {
  state = {
    // ingredients: null,
    // totalPrice: 4,
    // purchasable: false,
    purchasing: false,
    loading: false,
    // error: false,
  };
  
  componentDidMount () {
    console.log(this.props);
    // axios.get(process.env.REACT_APP_INGREDIENTS_URL)
    //   .then(response => {
    //     this.setState({ ingredients: response.data });
    //     this.isPurchasable(this.props.ingredients);
    //   })
    //   .catch((error) => this.setState({ error: true }));
    this.props.onFetchIngredients();
  }
  
  isPurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ig => ingredients[ig])
      .reduce((sum, el) =>  sum + el, 0);
      
    // this.setState({
    //   purchasable: sum > 0,
    // });
    return sum > 0;
  }
  
  // addIngredientHandler = (type) => {
  //   const updatedIngredients = {
  //     ...this.state.ingredients,
  //   };

  //   updatedIngredients[type] = this.state.ingredients[type] + 1;
  //   const newPrice = this.state.totalPrice + (INGREDIENTS_PRICE[type] || 0);

  //   this.setState({
  //     ingredients: updatedIngredients,
  //     totalPrice: newPrice,
  //   });
    
  //   this.isPurchasable(updatedIngredients);
  // };

  // removeIngredientHandler = (type) => {
  //   const updatedIngredients = {
  //     ...this.state.ingredients,
  //   };

  //   const currentIngredientCount = this.state.ingredients[type] - 1;
  //   updatedIngredients[type] = currentIngredientCount <= 0 ? 0 : currentIngredientCount;
  //   const newPrice = this.state.totalPrice - (INGREDIENTS_PRICE[type] || 0);

  //   this.setState({
  //     ingredients: updatedIngredients,
  //     totalPrice: newPrice,
  //     purchasable: false,
  //   });
    
  //   this.isPurchasable(updatedIngredients);
  // };
  
  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.history.push('/auth');
    }
  }
  
  purchaseCancelHandler = () => this.setState({ purchasing: false });
  
  purchaseContinueHandler = () => {
    this.props.onPurchaseInit();
    this.props.history.push('/checkout');
    // const queryParams = [];

    // const { totalPrice } = this.state;
    // const { ingredients } = this.props;

    // for (let i in ingredients) {
    //   queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(ingredients[i])}`);
    // }

    // queryParams.push(`price=${totalPrice}`)

    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: `?${queryParams.join('&')}`,
    // });
	};
  
  render() {
    const { purchasing } = this.state;
    const {
      error,
      ingredients,
      isAuthenticated,
      onIngredientAdded,
      onIngredientRemoved,
      totalPrice,
    } = this.props;
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
            isAuthenticated={isAuthenticated}
            ingredientToAdd={onIngredientAdded}
            ingredientToRemove={onIngredientRemoved}
            disabled={disabledInfo}
            price={totalPrice}
            purchasable={this.isPurchasable(ingredients)}
            purchase={this.purchaseHandler}
          />
          }
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

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.idToken,
    error: state.burgerBuilder.error,
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchIngredients: () => dispatch(fetchIngredients()),
    onIngredientAdded: (ingredientName) => dispatch(addIngredient(ingredientName)),
    onIngredientRemoved: (ingredientName) => dispatch(removeIngredient(ingredientName)),
    onPurchaseInit: () => dispatch(purchaseInit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, axios));

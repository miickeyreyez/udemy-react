import { INGREDIENTS_PRICE } from '../Constants';
import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    Bacon: 0,
    Cheese: 0,
    Meat: 0,
    Salad: 0,
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  const { type, ingredientName } = action;

  switch (type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredientName]: state.ingredients[ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[ingredientName],
      };

    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredientName]: state.ingredients[ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICE[ingredientName] < 0 ? 0 : state.totalPrice - INGREDIENTS_PRICE[ingredientName],
      };

    default:
      return state;
  }
;}

export default reducer;

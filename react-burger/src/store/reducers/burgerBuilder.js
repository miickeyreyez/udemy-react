import { INGREDIENTS_PRICE } from '../../Constants';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const reducer = (state = initialState, action) => {
  const { type, ingredients, ingredientName } = action;

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

    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients,
        error: false,
        totalPrice: 4,
      };

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;

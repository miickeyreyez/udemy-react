import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const addIngredient = (ingredientName) => ({
  type: actionTypes.ADD_INGREDIENT,
  ingredientName,
});

export const removeIngredient = (ingredientName) => ({
  type: actionTypes.REMOVE_INGREDIENT,
  ingredientName,
});

export const setIngredients = (ingredients) => ({
  type: actionTypes.SET_INGREDIENTS,
  ingredients,
});

export const fetchIngredientsFail = () => ({
  type: actionTypes.FETCH_INGREDIENTS_FAILED,
});

export const fetchIngredients = () => dispatch => {
  axios.get(process.env.REACT_APP_INGREDIENTS_URL)
    .then(response => {
      dispatch(setIngredients(response.data));
    })
    .catch((error) => dispatch(fetchIngredientsFail()));
};
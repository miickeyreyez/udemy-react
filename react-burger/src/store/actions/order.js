import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = (id, orderData) => ({
  type: actionTypes.PURCHASE_BURGER_SUCCESS,
  id,
  orderData,
});

export const purchaseBurgerFail = (error) => ({
  type: actionTypes.PURCHASE_BURGER_FAIL,
  error,
});

export const purchaseBurgerStart = () => ({
  type: actionTypes.PURCHASE_BURGER_START,
});

export const purchaseBurger = (idToken, orderData) => dispatch => {
  dispatch(purchaseBurgerStart());
  axios
		.post(`${process.env.REACT_APP_ORDERS_URL}?auth=${idToken}`, orderData)
		.then((response) => {
      dispatch(purchaseBurgerSuccess(response.data.name, orderData));
    })
    .catch((error) => dispatch(purchaseBurgerFail(error)));
};

export const purchaseInit = () => ({
  type: actionTypes.PURCHASE_INIT,
});

export const fetchOrdersSuccess = (orders) => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  orders,
});

export const fetchOrdersFail = (error) => ({
  type: actionTypes.FETCH_ORDERS_FAIL,
  error,
});

export const fetchOrdersStart = () => ({
  type: actionTypes.FETCH_ORDERS_START,
});

export const fetchOrders = (idToken, userId) => dispatch => {
  dispatch(fetchOrdersStart());
  const queryParams = `?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`;
  axios.get(`${process.env.REACT_APP_ORDERS_URL}${queryParams}`)
    .then(({ data }) => {
      const fetchedOrders = [];
      const objectArray = Object.entries(data);
      objectArray.forEach(([key, value]) => fetchedOrders.push({ ...value, id: key }));
      dispatch(fetchOrdersSuccess(fetchedOrders));
    })
    .catch((error) => dispatch(fetchOrdersFail(error)));
};

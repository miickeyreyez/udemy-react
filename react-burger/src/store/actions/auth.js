import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = (idToken, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  idToken,
  userId,
});

export const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error,
});

export const logOut = () => ({
  type: actionTypes.AUTH_LOGOUT,
});

export const checkAuthTimeOut = (expiresIn) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logOut());
    }, expiresIn * 1000);
  }
};

export const auth = (email, password, isSignUp) => dispatch => {
  dispatch(authStart());

  const authData = {
    email,
    password,
    returnSecureToken: true,
  };
  
  const url = isSignUp
    ? process.env.REACT_APP_SIGN_UP_URL
    : process.env.REACT_APP_SIGN_IN_URL

  axios.post(url, authData)
    .then( response => {
      const { expiresIn, idToken, localId: userId } = response.data;
      dispatch(authSuccess(idToken, userId));
      dispatch(checkAuthTimeOut(expiresIn));
    })
    .catch(error => dispatch(authFail(error.response.data.error.message)));
};

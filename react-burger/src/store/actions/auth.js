// import axios from 'axios';
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

export const logOut = () => {
  // localStorage.removeItem('idToken');
  // localStorage.removeItem('expiresIn');
  // localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};

export const checkAuthTimeOut = (expiresIn) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expiresIn,
  }
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch(logOut());
  //   }, expiresIn * 1000);
  // }
};

export const auth = (email, password, isSignUp) => {
  return {
    type: actionTypes.AUTH_USER,
    email,
    password,
    isSignUp,
  };
}

// export const auth = (email, password, isSignUp) => dispatch => {
  // dispatch(authStart());

  // const authData = {
  //   email,
  //   password,
  //   returnSecureToken: true,
  // };
  
  // const url = isSignUp
  //   ? process.env.REACT_APP_SIGN_UP_URL
  //   : process.env.REACT_APP_SIGN_IN_URL

  // axios.post(url, authData)
  //   .then( response => {
  //     const { expiresIn, idToken, localId: userId } = response.data;
  //     localStorage.setItem('idToken', idToken);
  //     localStorage.setItem('expiresIn', new Date(new Date().getTime() + (expiresIn * 1000)));
  //     localStorage.setItem('userId', userId);
  //     dispatch(authSuccess(idToken, userId));
  //     dispatch(checkAuthTimeOut(expiresIn));
  //   })
  //   .catch(error => dispatch(authFail(error.response.data.error.message)));
// };

export const setAuthRedirectPath = path => ({
  type: actionTypes.SET_AUTH_REDIRECT_PATH,
  path,
});

export const authCheckState = () => {
  // return dispatch => {
  //   const idToken = localStorage.getItem('idToken');
  //   const expiresIn = localStorage.getItem('expiresIn');
  //   const userId = localStorage.getItem('userId');
  //   const expirationDate = new Date(expiresIn);

  //   if (!idToken) {
  //     dispatch(logOut());
  //   } else {
  //     if (expirationDate <= new Date()) {
  //       dispatch(authSuccess(idToken, userId));
  //       dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
  //     } else {
  //       dispatch(logOut());
  //     }
  //   }
  // }
  return {
    type: actionTypes.AUTH_CHECK_INITIAL_STATE,
  };
}

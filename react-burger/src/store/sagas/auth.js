import axios from 'axios';
import { delay, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions';

export function* logOutSaga (action) {
  yield localStorage.removeItem('idToken');
  yield localStorage.removeItem('expiresIn');
  yield localStorage.removeItem('userId');
  yield put({
    type: actionTypes.AUTH_LOGOUT,
  });
}

export function* checkAuthTimeOutSaga (action) {
  yield delay(action.expiresIn * 1000);
  yield put(actions.logOut());
}

export function* authUserSaga (action) {
  yield put(actions.authStart());

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  
  const url = action.isSignUp
    ? process.env.REACT_APP_SIGN_UP_URL
    : process.env.REACT_APP_SIGN_IN_URL

  try {
    const response = yield axios.post(url, authData);
    const { expiresIn, idToken, localId: userId } = response.data;
    yield localStorage.setItem('idToken', idToken);
    yield localStorage.setItem('expiresIn', new Date(new Date().getTime() + (expiresIn * 1000)));
    yield localStorage.setItem('userId', userId);
    yield put(actions.authSuccess(idToken, userId));
    yield put(actions.checkAuthTimeOut(expiresIn));
  } catch(error) {
    yield put(actions.authFail(error.response.data.error.message));
  }
}

export function* authCheckStateSaga (action) {
  const idToken = yield localStorage.getItem('idToken');
  const expiresIn = yield localStorage.getItem('expiresIn');
  const userId = yield localStorage.getItem('userId');
  const expirationDate = new Date(expiresIn);

  if (!idToken) {
    yield put(actions.logOut());
  } else {
    if (expirationDate <= new Date()) {
      yield put(actions.authSuccess(idToken, userId));
      yield put(actions.checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
    } else {
      yield put(actions.logOut());
    }
  }
}
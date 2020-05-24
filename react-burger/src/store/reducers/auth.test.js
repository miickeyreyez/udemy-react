import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      idToken: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });

  it('should store token upon login', () => {
    const state = {
      idToken: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/',
    };
    const action = {
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'some idToken',
      userId: 'some userId',
    };
    expect(reducer(state, action)).toEqual({
      idToken: 'some idToken',
      userId: 'some userId',
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });
});

import { handleActions, combineActions } from 'redux-actions';

import {
  loginRequest,
  loginSuccess,
  loginFailed,
} from './actions';

const defaultState = {
  loading: false,
  isLoggedIn: false,
  error: null,
};

export default handleActions(
  {
    [combineActions(loginRequest)]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [loginSuccess]: (state) => ({
      ...state,
      loading: false,
      isLoggedIn: true,
      error: null,
    }),
    [combineActions(loginFailed)]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  defaultState
);

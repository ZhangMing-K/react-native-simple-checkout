import { handleActions, combineActions } from 'redux-actions';

import {
  productRequest,
  productSuccess,
  productFailed,
} from './actions';

const defaultState = {
  loading: false,
  products: [],
  error: null,
};

export default handleActions(
  {
    [productRequest]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [productSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      products: payload,
      error: null,
    }),
    [productFailed]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  defaultState
);

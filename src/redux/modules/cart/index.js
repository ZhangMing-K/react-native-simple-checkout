import { handleActions, combineActions } from 'redux-actions';

import {
  addItemToCartRequest,
  addItemToCartSuccess,
  addItemToCartFailed,
  emptyCartRequest,
  emptyCartSuccess,
  emptyCartFailed,
  removeItemFromCartRequest,
  removeItemFromCartSuccess,
  removeItemFromCartFailed
} from './actions';

const defaultState = {
  cart: [],
  total: 0,
};

export default handleActions(
  {
    [addItemToCartSuccess]: (state, { payload }) => ({
      ...state,
      cart: [...state.cart, payload],
      total: state.total + payload.cost
    }),
    [emptyCartSuccess]: (state) => ({
      ...state,
      cart: [],
      total: 0,
    }),
    [removeItemFromCartSuccess]: (state, { payload }) => ({
      ...state,
      cart: state.cart.filter((item, i) => item.id !== payload.id),
      total: state.total - payload.cost
    }),
  },
  defaultState
);

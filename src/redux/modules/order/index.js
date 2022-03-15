import { handleActions, combineActions } from 'redux-actions';

import {
  addOrderRequest,
  addOrderSuccess,
  addOrderFailed,
} from './actions';

const defaultState = {
  order: [],
  // {customer. items, orderId}
  error: null,
};

export default handleActions(
  {
    [addOrderSuccess]: (state, { payload }) => ({
      ...state,
      order: [
        ...state.order,
        { customer: payload.customer, items: payload.cartItems, orderId: payload.orderId }
      ]
    }),
  },
  defaultState
);

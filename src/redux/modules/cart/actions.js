import { createAction } from 'redux-actions';
import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM } from './actionTypes';

export const addItemToCartRequest = createAction(CART_ADD_ITEM.REQUEST);
export const addItemToCartSuccess = createAction(CART_ADD_ITEM.SUCCESS);
export const addItemToCartFailed = createAction(CART_ADD_ITEM.FAILED);

export const emptyCartRequest = createAction(CART_EMPTY.REQUEST);
export const emptyCartSuccess = createAction(CART_EMPTY.SUCCESS);
export const emptyCartFailed = createAction(CART_EMPTY.FAILED);

export const removeItemFromCartRequest = createAction(CART_REMOVE_ITEM.REQUEST);
export const removeItemFromCartSuccess = createAction(CART_REMOVE_ITEM.SUCCESS);
export const removeItemFromCartFailed = createAction(CART_REMOVE_ITEM.FAILED);

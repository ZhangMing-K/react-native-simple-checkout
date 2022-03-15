import { createAction } from 'redux-actions';
import { PRODUCT } from './actionTypes';

export const productRequest = createAction(PRODUCT.REQUEST);
export const productSuccess = createAction(PRODUCT.SUCCESS);
export const productFailed = createAction(PRODUCT.FAILED);

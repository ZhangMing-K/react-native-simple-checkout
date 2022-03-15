import { createAction } from 'redux-actions';
import { ORDER } from './actionTypes';

export const addOrderRequest = createAction(ORDER.REQUEST);
export const addOrderSuccess = createAction(ORDER.SUCCESS);
export const addOrderFailed = createAction(ORDER.FAILED);

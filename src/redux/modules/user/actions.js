import {createAction} from 'redux-actions';
import {LOGIN} from './actionTypes';

export const loginRequest = createAction(LOGIN.REQUEST);
export const loginSuccess = createAction(LOGIN.SUCCESS);
export const loginFailed = createAction(LOGIN.FAILED);

import { takeLatest, put, call } from 'redux-saga/effects';

import {
  loginRequest,
  loginSuccess,
  loginFailed,
} from './actions';

// Login
function* loginWorker({ payload }) {
  try {
    const { email, password } = payload;

    yield put(loginSuccess({ email }));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

export default function* () {
  yield takeLatest(loginRequest, loginWorker);
}

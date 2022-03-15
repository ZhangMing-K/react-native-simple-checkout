import { takeLatest, put, call } from 'redux-saga/effects';

import {
  addOrderRequest,
  addOrderSuccess,
  addOrderFailed,
} from './actions';

// Product
function* addOrderWorker({ payload }) {
  try {
    yield put(addOrderSuccess(payload));
  } catch (err) {
    yield put(addOrderFailed(err));
  }
}

export default function* () {
  yield takeLatest(addOrderRequest, addOrderWorker);
}

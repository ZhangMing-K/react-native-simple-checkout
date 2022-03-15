import { takeLatest, put, call } from 'redux-saga/effects';

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

// Add to Cart
function* addItemWorker({ payload }) {
  console.log('add item works: ? ', payload);
  try {
    yield put(addItemToCartSuccess(payload));
  } catch (err) {
    yield put(addItemToCartFailed(err));
  }
}

// Empty cart
function* emptyWorker() {
  try {
    yield put(emptyCartSuccess());
  } catch (err) {
    yield put(emptyCartFailed(err));
  }
}

// Remove from  Cart
function* removeItemWorker({ payload }) {
  try {
    yield put(removeItemFromCartSuccess(payload));
  } catch (err) {
    yield put(removeItemFromCartFailed(err));
  }
}

export default function* () {
  yield takeLatest(addItemToCartRequest, addItemWorker);
  yield takeLatest(emptyCartRequest, emptyWorker);
  yield takeLatest(removeItemFromCartRequest, removeItemWorker);
}

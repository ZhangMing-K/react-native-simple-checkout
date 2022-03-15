import { takeLatest, put, call } from 'redux-saga/effects';

import {
  productRequest,
  productSuccess,
  productFailed,
} from './actions';

import productsMockup from '../../../constants/items';

// Product
function* productWorker() {
  try {
    const allItems = productsMockup.getProducts();
    yield put(productSuccess(allItems));
  } catch (err) {
    yield put(productFailed(err));
  }
}

export default function* () {
  yield takeLatest(productRequest, productWorker);
}

import {combineReducers} from 'redux';

import userReducer from './user/index';
import productReducer from './product/index';
import cartReducer from './cart/index';
import orderReducer from './order/index';

export default combineReducers({
  userReducer,
  productReducer,
  cartReducer,
  orderReducer
});

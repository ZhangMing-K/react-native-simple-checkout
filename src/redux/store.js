import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from './modules/reducers';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
  // composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagas.forEach((saga) => sagaMiddleware.run(saga));

export const persistor = persistStore(store);

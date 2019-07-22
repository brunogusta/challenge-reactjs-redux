import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';

import reducers from './duck';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const SagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [SagaMiddleware];

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

SagaMiddleware.run(sagas);
export default store;

import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { stateTransformer } from 'redux-seamless-immutable'

import rootSaga from '~sagas'
import rootReducer from '~reducers'
import initialState from './initialState'

export default function configureStore(history) {
  let middlewares = []
  let enhancers = []
  const sagaMiddleware = createSagaMiddleware()

  middlewares.push(sagaMiddleware)

  if (process.env.NODE_ENV === `development`) {
    const { createLogger } = require(`redux-logger`)
    const logger = createLogger({ stateTransformer })
    middlewares.push(logger)
  }

  enhancers.push(applyMiddleware(...middlewares))

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  const storeEnhancers = compose(...enhancers)
  const store = createStore(rootReducer, initialState, storeEnhancers)

  store.runSaga = sagaMiddleware.run
  store.runSaga(rootSaga)

  if (module.hot) {
    module.hot.accept('~reducers', () => {
      const nextReducer = require('~reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
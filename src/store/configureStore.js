import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import storage from 'redux-persist/lib/storage'

import rootReducer, { rootSaga } from './index'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

export default ({ initialState } = {}) => {
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )

  let store = createStore(persistedReducer, initialState, enhancer)
  let persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}

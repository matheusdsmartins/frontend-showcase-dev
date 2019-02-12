import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

// Reducers
import beersReducer from './beers/reducers'

// Sagas
import beersSagas from './beers/sagas'

export function * rootSaga () {
  yield all([
    beersSagas()
  ])
}

export default combineReducers({
  beers: beersReducer
})

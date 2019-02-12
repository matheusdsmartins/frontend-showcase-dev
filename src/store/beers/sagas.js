import {
  all,
  call,
  takeLatest,
  put,
  select
} from 'redux-saga/effects'

import * as actions from './actions'
import * as types from './constants'
import * as services from './services'

export function * fetchBeers () {
  try {
    const { beers } = yield select()
    const beersData = yield call(services.fetchBeers, { params: { ...beers.paginate } })
    yield put(actions.fetchBeersSuccessful(beersData))
  } catch (error) {
    yield put(actions.fetchBeersFailure(error))
  }
}

export function * watchFetchBeers () {
  yield takeLatest(types.FETCH_BEERS, fetchBeers)
}

export default function * beersSagas () {
  yield all([
    watchFetchBeers()
  ])
}

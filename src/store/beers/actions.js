import * as types from './constants'

export const fetchBeers = payload => ({
  type: types.FETCH_BEERS,
  payload
})

export const fetchBeersSuccessful = payload => ({
  type: types.FETCH_BEERS_SUCCESSFUL,
  payload
})

export const fetchBeersFailure = payload => ({
  type: types.FETCH_BEERS_FAILURE,
  payload
})

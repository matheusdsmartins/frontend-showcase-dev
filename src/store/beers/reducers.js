import createReducer from '../createReducer'
import * as types from './constants'

const initialState = {
  items: [],
  pagination: {
    page: 1,
    per: 10
  },
  isFetching: false,
  isError: false,
  errorMessage: '',
  current: null
}

const auth = createReducer(initialState, {
  [types.FETCH_BEERS]: (state, action) => ({
    ...state,
    pagination: {
      ...state.pagination,
      ...action.payload
    },
    isFetching: true,
    isError: false,
    errorMessage: ''
  }),
  [types.FETCH_BEERS_SUCCESSFUL]: (state, action) => ({
    ...state,
    items: action.payload,
    isFetching: false
  }),
  [types.FETCH_BEERS_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    isError: true,
    errorMessage: action.payload
  }),
  [types.SET_CURRENT_BEER]: (state, action) => ({
    ...state,
    current: action.payload
  })
})

export default auth

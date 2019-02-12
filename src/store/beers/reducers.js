import createReducer from '../createReducer'
import * as types from './constants'

const initialState = {
  items: [],
  paginate: {
    _page: 1,
    _limit: 10
  },
  isFetching: false,
  isError: false,
  errorMessage: ''
}

const auth = createReducer(initialState, {
  [types.FETCH_BEERS]: (state, action) => ({
    ...state,
    paginate: {
      ...state.paginate,
      ...action.payload
    },
    isFetching: true,
    isError: false,
    errorMessage: ''
  }),
  [types.FETCH_BEERS_SUCCESSFUL]: (state, action) => ({
    ...state,
    items: action.payload.items,
    isFetching: false
  }),
  [types.FETCH_BEERS_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    isError: true,
    errorMessage: action.payload
  })
})

export default auth

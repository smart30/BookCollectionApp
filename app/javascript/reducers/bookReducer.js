import * as actionTypes from '../actions/actionTypes'

function bookReducer(state = { booksList: [], fetching: false, error: null }, action) {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null }

    case actionTypes.FETCH_BOOKS_API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
       booksList: action.booksList.data,
        error: null,
      }

    case actionTypes.FETCH_BOOKS_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        booksList: null,
        error: action.error,
      }

    case actionTypes.CLEAR_BOOKS:
      return {
        ...state,
        fetching: false,
        booksList: [],
        error: null,
    }
    default:
      return state
  }
}

export default bookReducer

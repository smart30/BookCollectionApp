import * as actionTypes from '../actions/actionTypes'

function addBooks(state = { addNewBookResponse: null, fetching: false, error: null }, action) {
  switch (action.type) {
    case actionTypes.ADD_BOOK_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null }

    case actionTypes.ADD_BOOK_API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        addNewBookResponse: action.response.status,
        error: null,
      }

    case actionTypes.ADD_BOOK_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        addNewBook: null,
        error: action.error,
      }

    case actionTypes.CLEAR_ADD_BOOKS:
      return {
        ...state,
        fetching: false,
        addNewBookResponse: null,
        error: null,
      }

    default:
      return state
  }
}

export default addBooks
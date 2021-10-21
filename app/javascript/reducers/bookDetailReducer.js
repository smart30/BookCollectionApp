import * as actionTypes from '../actions/actionTypes'

function bookDetail(state = { bookDetail: [], response: [], fetching: false, error: null }, action) {
  switch (action.type) {
    case actionTypes.FETCH_BOOK_DETAIL_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null }

    case actionTypes.FETCH_BOOK_DETAIL_API_CALL_SUCCESS:
      const bookRecords = {
        status: 'ready',
        records: { ...action.bookDetail },
      }
      return {
        ...state,
        fetching: false,
        bookDetail: bookRecords,
        error: null,
      }

    case actionTypes.HANDLE_USER_INPUT_CHANGE:
      return {
        ...state,
        bookDetail: {
          ...state.bookDetail,
            records: {
              ...state.bookDetail.records,
              [action.payload.name]: action.payload.value,
            }
        },
    }

    case actionTypes.FETCH_BOOK_DETAIL_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        bookDetail: null,
        error: action.error,
      }
    case actionTypes.DELETE_BOOK_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null }

    case actionTypes.DELETE_BOOK_API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        response: action.bookDetail.status,
        error: null,
      }

    case actionTypes.DELETE_BOOK_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        bookDetail: null,
        error: action.error,
      }

    case actionTypes.SAVE_BOOK_DETAILS_API_CALL_REQUEST:
      return { ...state, fetching: true, saveDetailsError: null }

    case actionTypes.SAVE_BOOK_DETAILS_API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        saveDetailsError: null,
        saveResponse: action.response.status
      }

    case actionTypes.SAVE_BOOK_DETAILS_API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
      }
    
    case actionTypes.CLEAR_SAVE_BOOK_RESPONSE:
      return {
        ...state,
        fetching: false,
        saveResponse: null,
        error: null,
    }
    default:
      return state
  }
}

export default bookDetail
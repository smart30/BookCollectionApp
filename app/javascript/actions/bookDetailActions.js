import { FETCH_BOOK_DETAIL_API_CALL_REQUEST,
         SAVE_BOOK_DETAILS_API_CALL_REQUEST,
        CLEAR_SAVE_BOOK_RESPONSE
        } from './actionTypes'

export function bookDetail(id) {
    return { type: FETCH_BOOK_DETAIL_API_CALL_REQUEST,  payload: { id: id }, }
  }

export function saveBookDetails(id, bookDetails) {
  return {
    type: SAVE_BOOK_DETAILS_API_CALL_REQUEST,
    payload: { id: id, bookDetails: bookDetails }
  }
}

export function clearUpdateResponse() {
  return { type: CLEAR_SAVE_BOOK_RESPONSE }
}
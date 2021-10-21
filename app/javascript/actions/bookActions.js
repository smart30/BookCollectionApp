import { FETCH_BOOKS_API_CALL_REQUEST, DELETE_BOOK_API_CALL_REQUEST, CLEAR_BOOKS, CLEAR_ADD_BOOKS } from './actionTypes'

export function bookActions() {
  return { type: FETCH_BOOKS_API_CALL_REQUEST }
}

export function deleteBook(id) {
  return { type: DELETE_BOOK_API_CALL_REQUEST,  payload: { id: id }, }
}

export function clearBooks() {
  return { type: CLEAR_BOOKS }
}


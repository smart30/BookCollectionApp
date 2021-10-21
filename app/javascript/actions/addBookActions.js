import { ADD_BOOK_API_CALL_REQUEST, HANDLE_USER_INPUT_CHANGE, CLEAR_ADD_BOOKS } from './actionTypes'

export function addBookActions(newBook) {
  return {
    type: ADD_BOOK_API_CALL_REQUEST,
    payload: { newBook: newBook },
  }
}

export const handleInputChangeAction = (name, value) => ({
  type: HANDLE_USER_INPUT_CHANGE,
  payload: { name, value },
})

export function clearAddBook() {
  return { type: CLEAR_ADD_BOOKS }
}
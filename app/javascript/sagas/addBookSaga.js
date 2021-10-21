import BookService from '../_services/books'
import * as actionTypes from '../actions/actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
import {bookActions} from '../actions/bookActions'

// worker saga: makes the api call when watcher saga sees the action
export function* addBooks(action) {
  try {
    const BookActions = action.payload
    const response = yield call(BookService.addBook, BookActions.newBook)
    // // dispatch a success action to the store with the new account details
    yield put({
      type: actionTypes.ADD_BOOK_API_CALL_SUCCESS,
      response,
    })
    
    yield put(bookActions())
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({
      type: actionTypes.ADD_BOOK_API_CALL_FAILURE,
      error,
    })
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* addBooksSaga() {
  yield takeLatest(actionTypes.ADD_BOOK_API_CALL_REQUEST, addBooks)
}

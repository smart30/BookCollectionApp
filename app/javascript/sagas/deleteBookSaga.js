import BookService from '../_services/books'
import * as actionTypes from '../actions/actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
import {bookActions} from '../actions/bookActions'

// worker saga: makes the api call when watcher saga sees the action
export function* deletBook(action) {
  try {
    const BookActions = action.payload
    const bookDetail = yield call(BookService.delete_book, BookActions.id)
    // // dispatch a success action to the store with the new account details
    yield put({
      type: actionTypes.DELETE_BOOK_API_CALL_SUCCESS,
      bookDetail,
    })
    yield put(bookActions())
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({
      type: actionTypes.DELETE_BOOK_API_CALL_FAILURE,
      error,
    })
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* deleteBooksSaga() {
  yield takeLatest(actionTypes.DELETE_BOOK_API_CALL_REQUEST, deletBook)
}

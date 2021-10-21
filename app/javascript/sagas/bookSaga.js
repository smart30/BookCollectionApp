import BookService from '../_services/books'
import * as actionTypes from '../actions/actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'

// worker saga: makes the api call when watcher saga sees the action
export function* fetchBooks(action) {
  try {
    const booksList = yield call(BookService.fetch)
    // // dispatch a success action to the store with the new account details
    yield put({
      type: actionTypes.FETCH_BOOKS_API_CALL_SUCCESS,
      booksList,
    })
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({
      type: actionTypes.FETCH_BOOKS_API_CALL_FAILURE,
      error,
    })
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* fetchBooksSaga() {
  yield takeLatest(actionTypes.FETCH_BOOKS_API_CALL_REQUEST, fetchBooks)
}

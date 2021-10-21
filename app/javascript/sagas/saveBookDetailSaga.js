import BookService from '../_services/books'
import * as actionTypes from '../actions/actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'

// worker saga: makes the api call when watcher saga sees the action
export function* saveBookDetail(action) {
  try {
    const bookActions = action.payload
    const response = yield call(BookService.saveBookDetails, bookActions.id, bookActions.bookDetails)
    // // dispatch a success action to the store with the new account details
    yield put({
      type: actionTypes.SAVE_BOOK_DETAILS_API_CALL_SUCCESS,
      response,
    })
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({
      type: actionTypes.SAVE_BOOK_DETAILS_API_CALL_FAILURE,
      error,
    })
  }
}
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* saveBookDetailSaga() {
  yield takeLatest(actionTypes.SAVE_BOOK_DETAILS_API_CALL_REQUEST, saveBookDetail)
}

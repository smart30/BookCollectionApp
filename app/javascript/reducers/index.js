import { combineReducers } from 'redux'
import bookReducer from './bookReducer'
import addBooksReducer from './addBooksReducer'
import bookDetail from './bookDetailReducer'

const reducer = combineReducers({
    bookReducer,
    addBooksReducer,
    bookDetail,
  })

export default reducer
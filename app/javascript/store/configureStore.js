import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { initSagas } from '../initSagas'
import rootReducer from '../reducers'

function configureStore () {
 const sagaMiddleware = createSagaMiddleware()
 const createdStore = createStore(rootReducer, applyMiddleware(sagaMiddleware))
 initSagas(sagaMiddleware)
 return createdStore
}

export const store = configureStore()
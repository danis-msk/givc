import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watchLoadGroups } from './sagas/groups'
import { rootReducer } from './reducers'
import { watchLoadStudents } from './sagas/students'

const saga = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(watchLoadGroups)
saga.run(watchLoadStudents)
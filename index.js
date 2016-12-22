import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import taskCompleteReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger()

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore)

let store = createStoreWithMiddleware(taskCompleteReducer)

let rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)


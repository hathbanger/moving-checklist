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

const initialState = { completeTask : {
  tasks: [{"item":"TV", "phone":"1234561234", "done": false}, {"item":"Phone", "phone":"1234561234", "done": true}, {"item":"Internet", "phone":"1234561234", "done": false}, {"item":"Best Bundle", "phone":"1234561234", "done": true}, {"item":"GIVE AWAY", "phone":"1234561234", "done": true}, {"item":"Security", "phone":"1234561234", "done": true}, {"item":"Gas", "phone":"1234561234", "done": true}, {"item":"Electricity", "phone":"1234561234", "done": true}]
	}
};

let store = createStoreWithMiddleware(taskCompleteReducer)

let rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)


import { combineReducers } from 'redux'
import update from 'immutability-helper';
import { 
  TOGGLE_TASK_SUCCESS, TOGGLE_TASK_ATTEMPT
} from './actions'

const initialState = {
     tasks: [{"item":"TV", "phone":"1234561234", "done": false}, 
     {"item":"Phone", "phone":"1234561234", "done": true}, 
     {"item":"Internet", "phone":"1234561234", "done": false}, 
     {"item":"Best Bundle", "phone":"1234561234", "done": true}, 
     {"item":"GIVE AWAY", "phone":"1234561234", "done": true}, 
     {"item":"Security", "phone":"1234561234", "done": true}, 
     {"item":"Gas", "phone":"1234561234", "done": true}, 
     {"item":"Electricity", "phone":"1234561234", "done": true}]
   }

const setLocalStorage = (state) => {localStorage.setItem("cyhList", JSON.stringify(state)); return state}
const fetchLocalStorage = (key) => {return JSON.parse(localStorage.getItem(key))}

const currentState = fetchLocalStorage("cyhList") ? fetchLocalStorage("cyhList") : setLocalStorage(initialState)

const completeTask = (state = currentState, action) => {
  let updatedState = { ...state, tasks: action.tasks }
  switch (action.type) {
    case  TOGGLE_TASK_SUCCESS:
      setLocalStorage(updatedState)
      return updatedState
    case  TOGGLE_TASK_ATTEMPT:
      return updatedState
    default:
      return state
  }
}

// We combine the reducers here so that they
// can be left split apart above
const taskCompleteReducer = combineReducers({
  completeTask
})


export default taskCompleteReducer
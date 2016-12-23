import { combineReducers } from 'redux'
import { 
  TOGGLE_TASK_SUCCESS, TOGGLE_TASK_ATTEMPT,
  SELECT_PROVIDER_SUCCESS, SELECT_PROVIDER_ATTEMPT
} from './actions'

const setLocalStorage = (state) => {localStorage.setItem("cyhList", JSON.stringify(state)); return state}
const fetchLocalStorage = (key) => {return JSON.parse(localStorage.getItem(key))}
const currentState = fetchLocalStorage("cyhList") ? fetchLocalStorage("cyhList") : setLocalStorage(initialState)


const toggleTask = (state = currentState, action) => {
  let updatedState = { ...state, tasks: action.tasks }
  switch (action.type) {
    case  TOGGLE_TASK_SUCCESS:
      setLocalStorage(updatedState)
      return updatedState
    case  TOGGLE_TASK_ATTEMPT:
      return updatedState
    case  SELECT_PROVIDER_SUCCESS:
      setLocalStorage(updatedState)
      return updatedState
    case  SELECT_PROVIDER_ATTEMPT:
      return updatedState      
    default:
      return state
  }
}


const taskToggleReducer = combineReducers({
  toggleTask
})

export default taskToggleReducer
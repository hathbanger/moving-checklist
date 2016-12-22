import { combineReducers } from 'redux'
import update from 'immutability-helper';
import { 
  COMPLETE_TASK_SUCCESS, COMPLETE_TASK_ATTEMPT
} from './actions'


function completeTask(state = {
  tasks: []
}, action) {

  switch (action.type) {
    case  COMPLETE_TASK_SUCCESS:
      return { ...state, tasks: action.tasks }

    case  COMPLETE_TASK_ATTEMPT:
      return { ...state, tasks: action.tasks }
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
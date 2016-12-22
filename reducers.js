import { combineReducers } from 'redux'
import update from 'immutability-helper';
import { 
  COMPLETE_TASK_SUCCESS, COMPLETE_TASK_ATTEMPT
} from './actions'

const initialState = {
     tasks: [{"item":"TV", "phone":"1234561234", "done": false}, {"item":"Phone", "phone":"1234561234", "done": true}, {"item":"Internet", "phone":"1234561234", "done": false}, {"item":"Best Bundle", "phone":"1234561234", "done": true}, {"item":"GIVE AWAY", "phone":"1234561234", "done": true}, {"item":"Security", "phone":"1234561234", "done": true}, {"item":"Gas", "phone":"1234561234", "done": true}, {"item":"Electricity", "phone":"1234561234", "done": true}]
   }
 

const completeTask = (state = initialState, action) => {
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

import update from 'immutability-helper';


export const TOGGLE_TASK_SUCCESS = 'TOGGLE_TASK_SUCCESS'
export const TOGGLE_TASK_ATTEMPT = 'TOGGLE_TASK_ATTEMPT'

export function toggleTask(tasks, taskId) {
  return dispatch => {
    let action = tasks[taskId].done ? false : true
    let attempt = dispatch(toggleTaskAttempt(tasks, taskId, action))   

    if(attempt.tasks){
      return dispatch(toggleTaskSuccess(attempt.tasks))
    } 
  }
}

function toggleTaskAttempt(tasks, task, action){
  const newTasksArray = update(tasks, {[task]: {done: {$set: action}}})
  return {
    type: TOGGLE_TASK_ATTEMPT,
    tasks: newTasksArray
  }
}

function toggleTaskSuccess(tasks){
  return {
    type: TOGGLE_TASK_SUCCESS,
    tasks: tasks
  }
}


export const SELECT_PROVIDER_SUCCESS = 'SELECT_PROVIDER_SUCCESS'
export const SELECT_PROVIDER_ATTEMPT = 'SELECT_PROVIDER_ATTEMPT'

export function selectedProvider(tasks, task, providerId) {
  return dispatch => {
    let attempt = dispatch(selectedProviderAttempt(tasks, task, providerId))   
    if(attempt.tasks){
      console.log("attempt: ",attempt)
      return dispatch(selectedProviderSuccess(attempt))
    } 
  }
}

function selectedProviderAttempt(tasks, task, providerId){
	const newTasksArray = update(tasks, {[task]: {selected_provider: {$set: parseInt(providerId)}}})
  return {
    type: SELECT_PROVIDER_ATTEMPT,
    tasks: newTasksArray
  }
}

function selectedProviderSuccess(arg){
  return {
    type: SELECT_PROVIDER_SUCCESS,
    tasks: arg.tasks
  }
}

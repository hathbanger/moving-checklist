
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

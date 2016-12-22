
import update from 'immutability-helper';
export const COMPLETE_TASK_SUCCESS = 'COMPLETE_TASK_SUCCESS'
export const COMPLETE_TASK_ATTEMPT = 'COMPLETE_TASK_ATTEMPT'



function toggleTaskAttempt(tasks, task, action){
	const newTasksArray = update(tasks, {[task]: {done: {$set: action}}})
  return {
    type: COMPLETE_TASK_ATTEMPT,
    tasks: newTasksArray
  }
}

function completeTaskSuccess(tasks){
  return {
    type: COMPLETE_TASK_SUCCESS,
    tasks: tasks
  }
}

// // Uses the API middlware to get a quote
export function completeTask(tasks, task) {
  return dispatch => {
  	let action = tasks[task].done ? false : true
  	console.log('action', tasks[task].done)
    let attempt = dispatch(toggleTaskAttempt(tasks, task, action))

    if(attempt.tasks){
    	
    	return dispatch(completeTaskSuccess(attempt.tasks))
    }
  }
}

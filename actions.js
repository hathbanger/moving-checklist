

export const COMPLETE_TASK_SUCCESS = 'COMPLETE_TASK_SUCCESS'
export const COMPLETE_TASK_ATTEMPT = 'COMPLETE_TASK_ATTEMPT'



function completeTaskAttempt(tasks, task){
	console.log('here are the tasks in completeTaskAttempt: ', tasks)
  return {
    type: COMPLETE_TASK_ATTEMPT,
    tasks: tasks,
    task: task
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
    return dispatch(completeTaskAttempt(tasks, task))
  }
}

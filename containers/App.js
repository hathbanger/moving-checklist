import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

class App extends Component {
  isDone(value) {
    return value.done == true;
  }  
  render() {
    const { dispatch, tasks } = this.props
    const progress = (tasks.filter(this.isDone).length / tasks.length) * 100
    return (
      <div>
        <Home
          dispatch={dispatch}
          tasks={tasks}
          progress={progress}
        />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  
  const { toggleTask, selectedProvider } = state
  const { tasks } = toggleTask
  
  return {
    tasks
  }
}

export default connect(mapStateToProps)(App)


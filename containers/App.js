import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

class App extends Component {
  render() {
    const { dispatch, tasks } = this.props
    
    return (
      <div>
        <Home
          dispatch={dispatch}
          tasks={this.props.tasks}
        />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  
  const { toggleTask } = state
  const { tasks } = toggleTask
  
  return {
    tasks
  }
}

export default connect(mapStateToProps)(App)


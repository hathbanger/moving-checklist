import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

class App extends Component {
  
  render() {
    const { dispatch  } = this.props
    
    return (
      <div>
        <Home
          dispatch={dispatch}
        />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  
  const { completeTask } = state
  const { tasks } = completeTask
  
  return {
    tasks
  }
}

export default connect(mapStateToProps)(App)


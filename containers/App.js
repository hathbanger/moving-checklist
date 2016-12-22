import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

class App extends Component {
  constructor(props) {
    console.log('constructing again')
    super(props)
    this.state = {
      tasks: [{"item":"TV", "phone":"1234561234", "done": false}, {"item":"Phone", "phone":"1234561234", "done": true}, {"item":"Internet", "phone":"1234561234", "done": false}, {"item":"Best Bundle", "phone":"1234561234", "done": true}, {"item":"GIVE AWAY", "phone":"1234561234", "done": true}, {"item":"Security", "phone":"1234561234", "done": true}, {"item":"Gas", "phone":"1234561234", "done": true}, {"item":"Electricity", "phone":"1234561234", "done": true}]
    }
  }
  
  render() {
    const { dispatch, tasks } = this.props
    
    return (
      <div>
        <Home
          dispatch={dispatch}
          tasks={this.state.tasks}
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


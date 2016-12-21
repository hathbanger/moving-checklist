import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

class App extends Component {
  
  render() {
    const { dispatch, errorMessage } = this.props
    
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
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  
  const { auth, postFetch } = state
  const { isAuthenticated, errorMessage } = auth
  const { posts } = postFetch
  
  return {
    isAuthenticated,
    posts,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)


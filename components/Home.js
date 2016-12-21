import React, { Component, PropTypes } from 'react'
import CheckListContainer from '../containers/CheckListContainer'

// import { fetchPosts } from '../actions'

export default class Home extends Component {

  render() {
    const { dispatch, errorMessage } = this.props
    return (
      <div className="container">
        <div className="jumbotron">
            <div>
              <CheckListContainer dispatch={dispatch} />
            </div>          
        </div>
      </div>
    )
  }

}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
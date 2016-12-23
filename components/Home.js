import React, { Component, PropTypes } from 'react'
import CheckListContainer from '../containers/CheckListContainer'
import { ProgressBar } from 'react-bootstrap';


export default class Home extends Component {
  isDone(value) {
    return value.done == true;
  }
  render() {
    const { dispatch, errorMessage, tasks } = this.props
    const progress = (this.props.tasks.filter(this.isDone).length / this.props.tasks.length) * 100
    return (
      <div className="container">
        <div className="jumbotron">
          <ProgressBar now={progress} />         
          <CheckListContainer checkBoxes={this.props.tasks} dispatch={dispatch} />
        </div>       
      </div>
    )
  }

}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
}
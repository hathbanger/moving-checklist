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
    console.log("progress",progress)
    return (
      <div className="container">
        <div className="jumbotron">
        <ProgressBar now={progress} />
          <ul className="list-group">
            <div className="form-group">            
                <CheckListContainer checkBoxes={this.props.tasks} dispatch={dispatch} />
            </div>    
          </ul>  
           
        </div>       
      </div>
    )
  }

}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
}
import React, { Component, PropTypes } from 'react'
import CheckListContainer from '../containers/CheckListContainer'


export default class Home extends Component {
  render() {
    const { dispatch, errorMessage, tasks } = this.props
    return (
      <div className="container">
        <div className="jumbotron">
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
import React, { Component, PropTypes } from 'react'



export default class Checkbox extends Component {
  render() {
    const { dispatch, indicator, completeTask } = this.props
    return (
    	<div>
        <label className="custom-control custom-checkbox">
          <input 
            type="checkbox"  
            ref='password'
            onClick={(event) => this.handleSelection(indicator)} 
            className="custom-control-input" />

          <p className="custom-control-indicator">{this.props.checkbox.item} - {this.props.checkbox.phone}</p>
        </label>
        </div>
    )
  }

  handleSelection(e){
    this.props.completeTask(e)
  }

}

Checkbox.propTypes = {
  completeTask: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}


             //             checked={this.props.checkbox.done} 
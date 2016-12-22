import React, { Component, PropTypes } from 'react'



export default class Checkbox extends Component {
  render() {
    const { indicator, checked } = this.props
    console.log("checkbox props", this.props.checkbox.done)
    return (
    	<div>
        <label className="custom-control custom-checkbox">
          <input 
            type="checkbox"  
            onChange={(event) => this.handleSelection(indicator)} 
            className="custom-control-input" 
            checked={this.props.checkbox.done}
            />

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
  completeTask: PropTypes.func.isRequired
}


             //             checked={this.props.checkbox.done} 
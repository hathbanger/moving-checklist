import React, { Component, PropTypes } from 'react'
import divStyle from '../style'
export default class Checkbox extends Component {

  render() {
    const { indicator, checked } = this.props
    return (
    	<div>
        <label  className="custom-control custom-checkbox">
          <input 
            type="checkbox"  
            onChange={(event) => this.handleSelection(indicator)} 
            className="custom-control-input css-checkbox " 
            checked={this.props.checkbox.done}
            />
            <span style={divStyle}> {this.props.checkbox.item} - {this.props.checkbox.phone}</span>
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

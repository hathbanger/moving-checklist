import React, { Component, PropTypes } from 'react'
export default class Checkbox extends Component {
  render() {
    const { indicator, checkBox } = this.props
    return (
        <td colSpan="1">
          <input 
            type="checkbox"  
            onChange={(event) => this.handleSelection(indicator)} 
            checked={checkBox.done}
            id={"checkboxG" + indicator}/> 

          <label 
            htmlFor={"checkboxG" + indicator} 
            className="css-label"/>                      
        </td>
    )
  }

  handleSelection(e){
    this.props.completeTask(e)
  }

}

Checkbox.propTypes = {
  completeTask: PropTypes.func.isRequired
}

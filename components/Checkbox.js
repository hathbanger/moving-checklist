import React, { Component, PropTypes } from 'react'
import divStyle from '../style'
export default class Checkbox extends Component {

  styles(){
    return {width: "100px", height: "100px", backgroundColor: "lightblue"}    
  }

  render() {
    const { indicator, checked } = this.props
    return (
        <td>
          <input 
            type="checkbox"  
            onChange={(event) => this.handleSelection(indicator)} 
            className="custom-control-input css-checkbox " 
            checked={this.props.checkbox.done}
            id={"checkboxG" + indicator}
            /> 
            <label htmlFor={"checkboxG" + indicator} className="css-label"></label>                       
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

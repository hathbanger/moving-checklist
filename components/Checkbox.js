import React, { Component, PropTypes } from 'react'
import divStyle from '../style'
export default class Checkbox extends Component {

  render() {
    const { indicator, checked } = this.props
    return (


<tr>
      <th scope="row">

      </th>
      <td>
          <input 
            type="checkbox"  
            onChange={(event) => this.handleSelection(indicator)} 
            className="custom-control-input css-checkbox " 
            checked={this.props.checkbox.done}
            />
      </td>
      <td><span style={divStyle}>{this.props.checkbox.item}</span></td>
      <td>{this.props.checkbox.providers[0].phone}</td>
    </tr>
    

    )
  }

  handleSelection(e){
    this.props.completeTask(e)
  }

}

Checkbox.propTypes = {
  completeTask: PropTypes.func.isRequired
}

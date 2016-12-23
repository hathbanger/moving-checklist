import React, { Component, PropTypes } from 'react'
import { toggleTask } from '../actions'

import CheckBox from '../components/Checkbox'

class CheckListContainer extends Component {
  render() {
    const { dispatch, checkBoxes } = this.props
    return (
      <div>
      
        {this.props.checkBoxes.map(function(checkbox, index){
            return (
              <li className="list-group-item">
                <label  className="custom-control custom-checkbox">
                  <CheckBox
                    key={ index }
                    indicator={ index }
                    checkbox={checkbox}
                    completeTask={() => dispatch(toggleTask(checkBoxes, index)) }/>
                </label>
              </li>    
              )    
          })}    
      </div>
    )
  }
}

CheckListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}


export default CheckListContainer


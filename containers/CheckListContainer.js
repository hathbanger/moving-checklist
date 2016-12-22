import React, { Component, PropTypes } from 'react'
import { toggleTask } from '../actions'
// import SignUp from '../components/SignUp'

import CheckBox from '../components/Checkbox'

class CheckListContainer extends Component {




  render() {
    const { dispatch, checkBoxes } = this.props
            console.log('checkBoxes from the container', checkBoxes)
    return (
      <div>
        <div className="form-group">
          {checkBoxes.map(function(checkbox, index){
              return (
                <CheckBox
                key={ index }
                indicator={ index }
                checkbox={checkbox}
                completeTask={() => dispatch(toggleTask(checkBoxes, index)) }
                />)        
            })} 
        </div>
      </div>
    )
  }
}

CheckListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}


export default CheckListContainer


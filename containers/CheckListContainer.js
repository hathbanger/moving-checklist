import React, { Component, PropTypes } from 'react'
// import { signUp } from '../actions'
// import SignUp from '../components/SignUp'

import CheckBox from '../components/Checkbox'

class CheckListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkBoxes: [{"item":"TV", "phone":"1234561234", "done": false}, {"item":"Phone", "phone":"1234561234", "done": true}, {"item":"Internet", "phone":"1234561234", "done": false}, {"item":"Best Bundle", "phone":"1234561234", "done": true}, {"item":"GIVE AWAY", "phone":"1234561234", "done": true}, {"item":"Security", "phone":"1234561234", "done": true}, {"item":"Gas", "phone":"1234561234", "done": true}, {"item":"Electricity", "phone":"1234561234", "done": true}]
    }
  }

  render() {
    const { dispatch,  isAuthenticated, errorMessage } = this.props

    return (
      <div>
        <div className="form-group">
          {this.state.checkBoxes.map(function(checkbox, index){
            console.log('heres the index', index)
              return (
                <CheckBox
                key={ index }
                indicator={ index }
                checkbox={checkbox}
                dispatch={dispatch} 
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


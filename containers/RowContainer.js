import React, { Component, PropTypes } from 'react'
import { toggleTask, selectedProvider } from '../actions'
import CheckBox from '../components/Checkbox'
import ContactContainer from './ContactContainer'
import ProviderContainer from './ProviderContainer'
import ServiceCell from '../components/ServiceCell'
import IconCell from '../components/IconCell'

class RowContainer extends Component {
  render() {
    const { dispatch, key, indicator, checkBox, checkBoxes } = this.props   
    return (
          <tr>
            <IconCell
              checkBox={checkBox}/>
            <CheckBox
              indicator={ indicator }
              checkBox={checkBox}
              completeTask={() => dispatch(toggleTask(checkBoxes, indicator)) }/>
            <ServiceCell
           	  checkBox={checkBox}/>
            <ProviderContainer 
              dispatch={dispatch} 
              checkBox={checkBox}
              selectedProvider={ event => dispatch(selectedProvider(checkBoxes, indicator, event))} />
            <ContactContainer 
	            indicator={indicator}
              checkBox={checkBox}
              checkBoxes={checkBoxes}
              completeTask={() => dispatch(toggleTask(checkBoxes, indicator))}/>
          </tr>
      )    
  }
}

RowContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}


export default RowContainer


import React, { Component, PropTypes } from 'react'
import { toggleTask, selectedProvider } from '../actions'
import CheckBox from '../components/Checkbox'
import ProviderContainer from './ProviderContainer'
import { Table } from 'react-bootstrap';
import divStyle from '../style'

class CheckListContainer extends Component {
  render() {
    const { dispatch, checkBoxes } = this.props

    return (
      <div>
        <Table className="text-center">  
          <tbody>
            {this.props.checkBoxes.map(function(checkbox, i){
              console.log('checkbox: ',checkbox)
                return (
                      <tr key={i + 1}>
                        <CheckBox
                          key={ i }
                          indicator={ i }
                          checkbox={checkbox}
                          completeTask={() => dispatch(toggleTask(checkBoxes, i)) }/>
                        <td key={i + 2}  colSpan="1">
                          <h3>{checkbox.item}</h3>
                        </td>
                        <ProviderContainer 
                          key={i + 3} 
                          dispatch={dispatch} 
                          checkBox={checkbox}
                          selectedProvider={ event => dispatch(selectedProvider(checkBoxes, i, event))} />
                        <td key={i + 4}>
                          <h3>{checkbox.providers[parseInt(checkbox.selected_provider)].phone}</h3>
                        </td>
                      </tr>
                  )    
              })} 
          </tbody>
        </Table>
      </div>
    )
  }
}

CheckListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}


export default CheckListContainer


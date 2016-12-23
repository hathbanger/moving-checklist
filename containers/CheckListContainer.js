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
    <thead>
      <tr className="text-center">
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>  
    <tbody>

        {this.props.checkBoxes.map(function(checkbox, i){
            return (
                  <tr key={i + 5}>
                    <td key={i + 4}>
                      <CheckBox
                              key={ i }
                              indicator={ i }
                              checkbox={checkbox}
                              completeTask={() => dispatch(toggleTask(checkBoxes, i)) }/>
                    </td>
                    <td key={i + 1}  colSpan="1">
                      <h3>{checkbox.item}</h3>
                    </td>
                    <td>
                      <ProviderContainer 
                              key={i + 3} 
                              dispatch={dispatch} 
                              checkBox={checkbox}
                              selectedProvider={ event => dispatch(selectedProvider(checkBoxes, i, event))} />
                    </td>
                    <td key={i + 2}>
                      <h3>{checkbox.providers[checkbox.selectedProvider].phone}</h3>
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


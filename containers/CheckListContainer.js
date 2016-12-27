import React, { Component, PropTypes } from 'react'
import { toggleTask, selectedProvider } from '../actions'
import CheckBox from '../components/Checkbox'
import ProviderContainer from './ProviderContainer'
import { Table, Glyphicon } from 'react-bootstrap';
import divStyle from '../style'

class CheckListContainer extends Component {
  render() {
    const { dispatch, checkBoxes } = this.props
    console.log('props!', this.props)
    return (
      <div>
        <Table className="text-center">  
          <tbody>
            {this.props.checkBoxes.map(function(checkbox, i){
                let phone = checkbox.providers[parseInt(checkbox.selected_provider)].phone
                let scrubbedPhone = phone.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/\s]/gi, '');
                return (
                      <tr key={i + 1}>
                        <CheckBox
                          key={ i }
                          indicator={ i }
                          checkbox={checkbox}
                          completeTask={() => dispatch(toggleTask(checkBoxes, i)) }/>
                        <td key={i + 2} colSpan="2">
                          <h4 className="center-block">{checkbox.item}</h4>
                        </td>
                        <ProviderContainer 
                          key={i + 3} 
                          dispatch={dispatch} 
                          checkBox={checkbox}
                          selectedProvider={ event => dispatch(selectedProvider(checkBoxes, i, event))} />
                        <td key={i + 4}>
                          <a href={`tel:${scrubbedPhone}`}>
                            <h4>
                              <Glyphicon glyph="earphone" className="earphoneGlyphicon" />
                              {phone}
                            </h4>
                          </a>
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


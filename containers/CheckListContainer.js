import React, { Component, PropTypes } from 'react'
import { toggleTask, selectedProvider } from '../actions'
import CheckBox from '../components/Checkbox'
import ProviderContainer from './ProviderContainer'
import { Table, Glyphicon } from 'react-bootstrap';

class CheckListContainer extends Component {
  render() {
    const { dispatch, checkBoxes } = this.props
    return (
      <div>
        <Table bordered condensed responsive className="text-center">  
          <tbody>
            {this.props.checkBoxes.map(function(checkbox, i){
                let phone = checkbox.providers[parseInt(checkbox.selected_provider)].phone
                let scrubbedPhone = phone.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/\s]/gi, '');
                let intTest = parseInt(scrubbedPhone)
                let link = ""
                let scrubbedLink = ""
                if (!intTest) {
                  link = phone.split("://")[1]
                  console.log(link)
                  scrubbedLink = link.split("?")[0]
                }            
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
                        {  !isNaN(intTest) &&
                          <a href={`tel:${scrubbedPhone}`} onClick={() => dispatch(toggleTask(checkBoxes, i)) }>
                            <h4>
                              {phone}
                            </h4>
                          </a>
                        }
                        { isNaN(intTest) &&
                          <a href={`${link}`} target="_blank" onClick={() => dispatch(toggleTask(checkBoxes, i)) }>
                            <h4>
                              {scrubbedLink}
                            </h4>
                          </a>
                        }
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


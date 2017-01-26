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
                  link = phone
                  var linkArr = link.split("://")[1]
                  scrubbedLink = linkArr.split("?")[0]
                  if (scrubbedLink[scrubbedLink.length - 1] == "/"){
                    scrubbedLink = scrubbedLink.slice(0, scrubbedLink.length - 1)
                  }
                }            
                return (
                      <tr key={i + 1}>
                        <CheckBox
                          key={ i }
                          indicator={ i }
                          checkbox={checkbox}
                          completeTask={() => dispatch(toggleTask(checkBoxes, i)) }/>
                        <td key={i + 2} colSpan="2">
                          <h6 className="center-block">{checkbox.item}</h6>
                        </td>
                        <ProviderContainer 
                          key={i + 3} 
                          dispatch={dispatch} 
                          checkBox={checkbox}
                          selectedProvider={ event => dispatch(selectedProvider(checkBoxes, i, event))} />
                        <td key={i + 4}>
                        {  !isNaN(intTest) &&
                          <a href={`tel:${scrubbedPhone}`} className="phone-number" data-invoca-campaign-id={`${checkbox.providers[parseInt(checkbox.selected_provider)].campaign_id}${checkbox.providers[parseInt(checkbox.selected_provider)].publisher_id}`} onClick={() => dispatch(toggleTask(checkBoxes, i)) }>
                            <h6>
                              {phone}
                            </h6>
                          </a>
                        }
                        { isNaN(intTest) &&
                          <a href={`${link}`} target="_blank" onClick={() => dispatch(toggleTask(checkBoxes, i)) }>
                            <h6>
                              Order Now
                            </h6>
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


import React, { Component, PropTypes } from 'react'
import { Dropdown, MenuItem } from 'react-bootstrap';

class ProviderContainer extends Component {
  render() {
    const { dispatch, checkBox } = this.props
    let selectedProviderName = checkBox.providers[parseInt(checkBox.selected_provider)].name
    return (
      <td>
        <Dropdown id={checkBox.item} block vertical>
          <Dropdown.Toggle block>
            {checkBox.providers[parseInt(checkBox.selected_provider)].name}
          </Dropdown.Toggle>  
          <Dropdown.Menu
          onSelect={(event) => this.handleSelect(event)} >           
            {checkBox.providers.map(function(provider, index){
              return(
                <MenuItem 
                  key={index} 
                  eventKey={index}>
                      {provider.name}</MenuItem>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </td>
    )
  }

  handleSelect(event,eventKey) {
    this.props.selectedProvider(event)
  }  
}

ProviderContainer.propTypes = {
  selectedProvider: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default ProviderContainer


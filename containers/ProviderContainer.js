import React, { Component, PropTypes } from 'react'
import { ButtonGroup, Dropdown, DropdownButton, MenuItem } from 'react-bootstrap';


class ProviderContainer extends Component {
  render() {
    const { dispatch, checkBox } = this.props
    return (
      <td>
      <Dropdown block>
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


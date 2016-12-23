import React, { Component, PropTypes } from 'react'
import divStyle from '../style'
import { ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';


class ProviderContainer extends Component {


  render() {
    const { dispatch, checkBox } = this.props
    return (
      <div>
        <DropdownButton onSelect={(event) => this.handleSelect(event)} bsSize="large"  title={checkBox.providers[checkBox.selectedProvider].name} id="bg-nested-dropdown">
          {checkBox.providers.map(function(provider, index){
            return(
              <MenuItem key={index} eventKey={index}>{provider.name}</MenuItem>
            )
          })}
        </DropdownButton> 
      </div>
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


import React, { Component, PropTypes } from 'react'
export default class PhoneOrder extends Component {
  render() {
  	const { checkBox, scrubbedPhone, ogPhone } = this.props
  	let provider = checkBox.providers[parseInt(checkBox.selected_provider)]
    return (
	        <a 
	          href={`tel:${scrubbedPhone}`} 
	          className="phone-number" 
	          data-invoca-campaign-id={`${provider.campaign_id}${provider.publisher_id}`} 
	          onClick={(event) => this.handleClick()}>
		          <h6>
		            {ogPhone}
		          </h6>
	        </a>
    )
  }

  handleClick(e){
  	this.props.toggleTask();
  }
}



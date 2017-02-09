import React from 'react'


const PhoneOrder = ({checkBox, provider, scrubbedPhone, ogPhone, toggleTask}) =>
	        <a 
	          href={`tel:${scrubbedPhone}`} 
	          className="phone-number" 
	          data-invoca-campaign-id={`${provider.campaign_id}${provider.publisher_id}`} 
	          onClick={toggleTask}>
		          <h6>
		            {ogPhone}
		          </h6>
	        </a>

export default PhoneOrder



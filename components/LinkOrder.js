import React from 'react'


const LinkOrder = ({link, toggleTask}) =>
	        <a 
	          href={`${link}`} 
	          target="_blank" 
	          onClick={toggleTask}>
		          <h6>
		            Order Now
		          </h6>
	        </a>

export default LinkOrder
import React, { Component, PropTypes } from 'react'
export default class LinkOrder extends Component {
  render() {
  	const { link } = this.props
    return (
	        <a 
	          href={`${link}`} 
	          target="_blank" 
	          onClick={(event) => this.handleToggle()}>
		          <h6>
		            Order Now
		          </h6>
	        </a>	        
    )
  }

  handleClick(){
  	this.props.toggleTask();
  }
}



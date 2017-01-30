import React, { Component, PropTypes } from 'react'
export default class ServiceCell extends Component {
  render() {
  	const { checkBox } = this.props
    return (
		<td colSpan="1">
		  <h6 className="center-block text-left">{checkBox.item}</h6>
		</td>
    )
  }
}



import React, { Component, PropTypes } from 'react'
import CheckListContainer from '../containers/CheckListContainer'
import PhoneOrder from '../components/PhoneOrder'
import LinkOrder from '../components/LinkOrder'
import { ProgressBar, Col } from 'react-bootstrap';
import { toggleTask, selectedProvider } from '../actions'


class ContactContainer extends Component {
  render() {
    const { indicator, checkBoxes, checkBox } = this.props
	let link, scrubbedLink
    let phone = checkBox.providers[parseInt(checkBox.selected_provider)].phone
	let scrubbedPhone = phone.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/\s]/gi, '');
	let intTest = parseInt(scrubbedPhone)
	let provider = checkBox.providers[parseInt(checkBox.selected_provider)]
	if (!intTest) {
	  link = phone
	  var linkArr = link.split("://")[1]
	  scrubbedLink = linkArr.split("?")[0]
	  if (scrubbedLink[scrubbedLink.length - 1] == "/"){
	    scrubbedLink = scrubbedLink.slice(0, scrubbedLink.length - 1)
	  }
	}       
    return (
      <td>
	      { !isNaN(intTest) &&
	      	<PhoneOrder
	      		checkBox={checkBox}
	      		ogPhone={phone}
	      		provider={provider}
	      		scrubbedPhone={scrubbedPhone}
	      		indicator={indicator}
	      		toggleTask={(event) => this.handleToggle(indicator)} />
	      }
	      { isNaN(intTest) &&
	      	<LinkOrder 
	      		link={link}
	      		toggleTask={(event) => this.handleToggle(indicator)} />
	      }
      </td>
    )
  }

  handleToggle(e){
    this.props.completeTask(e)
  }

}



ContactContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired
}

export default ContactContainer
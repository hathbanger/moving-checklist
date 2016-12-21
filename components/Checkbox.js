import React, { Component, PropTypes } from 'react'
import { completeTask } from '../actions'


export default class SearchBar extends Component {
  handleSelection(e){
    console.log('SELECTION')
    console.log(e)
    // let dispatch = this.props.dispatch
    // dispatch(completeTask)
  }

  handleChange(e){
    console.log('change!')
    console.log(this.refs.password)
  }
  render() {
    const { dispatch } = this.props
    console.log(this.props.indicator)
    return (
    	<div>
        <label className="custom-control custom-checkbox">
          
          <input 
            type="checkbox"  
            ref='password' 
            onChange={(event) => this.handleChange(event)} 
            onClick={(event) => this.handleSelection(event)} 
            checked={this.props.checkbox.done}  
            className="custom-control-input" />

          <span className="custom-control-indicator">{this.props.checkbox.item}</span>
          <span className="custom-control-description">{this.props.checkbox.phone}</span>
        </label>
        </div>
    )
  }

  handleClick(event) {
    const searchTerm = this.refs.searchTerm.value.trim()
    this.props.dispatch(search(searchTerm))
  }  
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired
}


             
import React, { Component, PropTypes } from 'react'
export default class TableHead extends Component {
  render() {
    return (
          <thead>
             <tr>
                <th>Checkbox</th>
                <th>Service</th>
                <th>Brand (Select)</th>
                <th>Order</th>
             </tr>
          </thead> 
    )
  }
}

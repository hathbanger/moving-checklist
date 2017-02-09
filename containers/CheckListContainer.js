import React, { Component, PropTypes } from 'react'
import TableHead from '../components/TableHead'
import RowContainer from './RowContainer'
import { Table } from 'react-bootstrap';

class CheckListContainer extends Component {
  render() {
    const { dispatch, checkBoxes } = this.props
    return (
      <div>
        <Table bordered condensed responsive className="text-center">  
          <TableHead />        
          <tbody>
            {checkBoxes.map(function(checkbox, i){         
                return (
                  <RowContainer
                    key={i}
                    indicator={i}
                    checkBox={checkbox}
                    checkBoxes={checkBoxes}
                    dispatch={dispatch} />
                  )    
              })} 
          </tbody>
        </Table>
      </div>
    )
  }
}

CheckListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}


export default CheckListContainer

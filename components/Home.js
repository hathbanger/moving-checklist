import React from 'react'
import CheckListContainer from '../containers/CheckListContainer'
import { ProgressBar, Col } from 'react-bootstrap';


const Home = ({dispatch, tasks, progress}) =>
      <div className="container">
        <Col md={12}>
            { tasks &&
              <div>
                <ProgressBar 
                  now={progress} />         
                <CheckListContainer 
                  checkBoxes={tasks} 
                  dispatch={dispatch} />
              </div>
            }     
        </Col>       
      </div>

export default Home

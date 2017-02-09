import React from 'react'


const Checkbox = ({indicator, checkBox, completeTask}) =>
        <td colSpan="1">
          <input 
            type="checkbox"  
            onChange={completeTask} 
            checked={checkBox.done}
            id={"checkboxG" + indicator}/> 

          <label
            htmlFor={"checkboxG" + indicator} 
            className="css-label"/>                      
        </td>


export default Checkbox


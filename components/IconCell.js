import React from 'react'
import {Image, Col} from 'react-bootstrap'

const IconCell = ({checkBox}) =>
		<td colSpan="1">
			<Image style={{maxWidth: "25px"}} src={checkBox.icon} />
		</td>

export default IconCell

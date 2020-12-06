import React from "react" 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function StudentEntry(props) {
    return (
      <tr>
        <td>{props.counselor}</td>
      </tr>
    );  
}

export default StudentEntry
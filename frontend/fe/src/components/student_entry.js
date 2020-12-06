import React from "react" 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function StudentEntry(props) {
    return (
      <tr>
        <td>{props.counselor}</td>
        <td><Button href={`/counselor/students/${props.id}/goals`}>See goals</Button></td>
      </tr>
    );  
}

export default StudentEntry
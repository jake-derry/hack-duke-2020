import React from "react" 
import {Link} from "react-router-dom"

function StudentEntry(props) {
    return (
        <div>
          <h1>JEEZ {props.counselor}</h1>
        </div>
    );  
}

export default StudentEntry
import React from "react" 
import {Link} from "react-router-dom"

function SPageScreen() {
    return (
        <div>
            <h1>Student Page</h1>
            <ul>
            <Link to='/slogin'>
                <li>Log Out</li>
            </Link>
            </ul>
        </div>               
    );  
}

export default SPageScreen
import React from "react" 
import {Link} from "react-router-dom"

function CPageScreen() {
    return (
        <div>
            <h1>Counselor Page</h1>
            <ul>
            <Link to='/students'>
                <li>Stuff2</li>
            </Link>
            <Link to='/clogin'>
                <li>Log Out</li>
            </Link>
            </ul>
        </div>               
    );  
}

export default CPageScreen
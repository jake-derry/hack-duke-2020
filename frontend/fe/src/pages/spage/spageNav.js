import React from "react"
import '../../App.css'
import {Link} from 'react-router-dom'

export default function SPageNav() {
    
    const navStyle = {
        color: 'black'
    };

    return(
        <nav>
            <h1>Student Page</h1>

            <ul>
           
            <Link style={navStyle} to='/slogin'>
                <li>Log Out</li>
            </Link>
            </ul>
        </nav>
    );
}
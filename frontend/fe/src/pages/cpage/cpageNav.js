import React from "react"
import '../../App.css'
import {Link} from 'react-router-dom'

export default function CPageNav() {
    
    const navStyle = {
        color: 'black'
    };

    return(
        <nav>
            <h1>Counselor Page</h1>

            <ul>
            <Link style={navStyle} to='/students'>
                <li>Stuff2</li>
            </Link>
            <Link style={navStyle} to='/clogin'>
                <li>Log Out</li>
            </Link>
            </ul>
        </nav>
    );
}
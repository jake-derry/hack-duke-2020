import React from "react"
import '../../App.css'
import {Link} from 'react-router-dom'
import Login from './loginform'

export default function CNav() {
    
    const navStyle = {
        color: 'black'
    };

    return(
        <nav className = "cloginnav">
            <h1>Counselor Login</h1>

            <ul>
            <Link style={navStyle} to='/cpage'>
                <li>Counselor login</li>
               
            </Link>
            </ul>
        </nav>
    );
}
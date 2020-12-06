import React from "react"
import '../../App.css'
import {Link} from 'react-router-dom'

export default function SNav() {
    
    const navStyle = {
        color: 'black'
    };

    return(
        <nav className = "cloginnav">
            <h1>Student Login</h1>

            <ul>
            <Link style={navStyle} to='/spage'>
                <li>Student login</li>
            </Link>
            </ul>
        </nav>
    );
}
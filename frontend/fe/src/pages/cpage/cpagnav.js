import React from "react"
import '../../App.css'
import {Link} from 'react-router-dom'

export default function HomeNav() {
    
    const navStyle = {
        color: 'white'
    };
               
    return(
        <nav className="hnav">
            <Link style={navStyle} to='/'>
                <h1>Home</h1>
            </Link>

            <ul className = "nav-links">
                <Link style={navStyle} to='/clogin'>
                    <li>Counselor login</li>
                </Link>

                <Link style={navStyle} to='/slogin'>
                    <li>Student login</li>
                </Link> 
            </ul>

        </nav>
    );
}
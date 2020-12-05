import React from "react"
import './App.css';
import {Link} from 'react-router-dom'

export default function CounselorNav() {
    
    const navStyle = {
        color: 'black'
    };

    return(
        <nav>
            <Link style={navStyle} to='/'>
                <h1>Home</h1>
            </Link>

            <ul>
            <Link style={navStyle} to='/Text'>
                <li>Text</li>
            </Link>

            <Link style={navStyle} to='/trial'>
                <li>trial</li>
            </Link> 
            </ul>
        </nav>
    );
}



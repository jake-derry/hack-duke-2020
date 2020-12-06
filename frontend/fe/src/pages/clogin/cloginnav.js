import React from "react"
import '../../App.css'
import {Link} from 'react-router-dom'

export default function HomeNav() {
    
    const navStyle = {
        color: 'black'
    };

    return(
        <nav>
            <ul>
            <Link style={navStyle} to='/cpage'>
                <li>Counselor Page</li>
            </Link>
            </ul>
        </nav>
    );
}
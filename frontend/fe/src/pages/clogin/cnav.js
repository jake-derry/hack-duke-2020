import React from "react"
import '../../App.css'
import {Link} from 'react-router-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Clogin from '../clogin/clogin.js'

export default function HomeNav() {
    
    const navStyle = {
        color: 'black'
    };

    return(
        <nav>
            <Link style={navStyle} to='/'>
                <h1>Counselor login</h1>
            </Link>

            <ul>
            <Link style={navStyle} to='/cpage'>
                <li>Counselor login</li>
            </Link>
            </ul>
        </nav>
    );
}
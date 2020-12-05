import React from "react"
import '../../App.css'
import {Link} from 'react-router-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Cpage from '../clogin/clogin.js'

export default function CPageNav() {
    
    const navStyle = {
        color: 'black'
    };

    return(
        <nav>
            <Link style={navStyle} to='/'>
                <h1>Stuff1</h1>
            </Link>

            <ul>
            <Link style={navStyle} to='/students'>
                <li>Stuff2</li>
            </Link>
            </ul>
        </nav>
    );
}
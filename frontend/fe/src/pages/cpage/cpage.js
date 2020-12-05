import React from "react"

import CPageScreen from './cpagescreen.js'
import CPageNav from './cpageNav'
import Students from './students'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Cpage() {
    return (
        <BrowserRouter>
            <div>
                <CPageNav />
                <Switch>
                    <Route path="/" exact component={CPageScreen} />
                    <Route path="/students" component = {Students} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Cpage
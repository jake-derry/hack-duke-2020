import React from "react"

import SPageScreen from './spagescreen.js'
import Slogin from '../slogin/slogin'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Spage() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/spage" exact component={SPageScreen} />
                    <Route path="/slogin" component = {Slogin} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Spage
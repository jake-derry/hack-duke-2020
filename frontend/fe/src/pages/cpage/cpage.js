import React from "react"

import CPageScreen from './cpagescreen.js'
import Clogin from '../clogin/clogin'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Cpage() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/cpage" exact component={CPageScreen} />
                    <Route path="/clogin" component = {Clogin} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Cpage
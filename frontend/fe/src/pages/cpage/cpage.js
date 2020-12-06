import React from "react"

import CPageScreen from './cpagescreen.js'
import CPageNav from './cpageNav'
import Students from './students'
import Clogin from '../clogin/clogin'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Cpage() {
    return (
        <BrowserRouter>
            <div>
                { /* <CPageNav /> */}
                <Switch>
                    <Route path="/cpage" exact component={CPageScreen} />
                    <Route path="/students" component = {Students} />
                    <Route path="/clogin" component = {Clogin} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Cpage
import React from "react"

import Sloginscreen from './sloginscreen'                                         
import Spage from '../spage/spage.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Slogin() {
    return (
        <BrowserRouter>
            <div>       
                <Switch>
                    <Route path="/slogin" exact component={Sloginscreen} />
                    <Route path="/spage" component = {Spage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Slogin
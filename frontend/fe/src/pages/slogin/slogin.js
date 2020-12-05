import React from "react"

import Sloginscreen from './sloginscreen'                                         
import Spage from '../spage/spage.js'
import Snav from './snav'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Slogin() {
    return (
        <BrowserRouter>
            <div>
                <Snav />       
                <Switch>
                    <Route path="/slogin" exact component={Sloginscreen} />
                    <Route path="/spage" component = {Spage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Slogin
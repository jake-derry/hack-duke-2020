import React from "react"

import Cloginscreen from './cloginscreen'                                         
import Cpage from '../cpage/cpage.js'
import Cnav from './cnav'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Clogin() {
    return (
        <BrowserRouter>
            <div>
                <Cloginscreen />       
                <Switch>
                    
                    <Route path="/cpage" component = {Cpage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Clogin
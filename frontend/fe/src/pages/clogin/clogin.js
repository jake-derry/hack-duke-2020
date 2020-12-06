import React from "react"

import Cloginscreen from './cloginscreen'                                         
import Cpage from '../cpage/cpage.js' 
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Clogin() {
    return (
        <BrowserRouter>
            <div>
                {/*<Cloginscreen /> */}      
                <Switch>
                    <Route path='/clogin' component={Cloginscreen} />
                    <Route path="/cpage" component = {Cpage} />
                </Switch>
            </div>       
        </BrowserRouter>    
    );
}

export default Clogin
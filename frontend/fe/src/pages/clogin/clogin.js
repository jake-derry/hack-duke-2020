import React from "react"

import Cloginscreen from './cloginscreen'                                         
import Cpage from '../cpage/cpage.js' 
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CPageScreen from '../cpage/cpagescreen'

import './clogin.css'

function Clogin() {
    return (
        <BrowserRouter>
            <div>   
                <Switch>
                    <Route path='/clogin' component={Cloginscreen} />
                    <Route path="/cpage" component = {Cpage} />
                    {/* ^^^ this might be cpage */}
                </Switch>
            </div>       
        </BrowserRouter>    
    );
}

export default Clogin
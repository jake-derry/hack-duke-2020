import React from "react"
import Cpage from "../cpage"
import Spage from "../spage"
import Homescreen from './homescreen'

import {BrowserRouter, Switch, Route} from 'react-router-dom'


function Homepage() {
    return (
        <BrowserRouter>
            <div>
                <HomeNav />
                <Switch>
                    <Route path="/" exact component={Homescreen} />
                    <Route path="/spage" component = {Cpage} />
                    <Route path="/cpage" component = {Spage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Homepage
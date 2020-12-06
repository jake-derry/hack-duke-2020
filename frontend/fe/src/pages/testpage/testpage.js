import React from "react"

import ListStudents from '../../components/list_students'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Testpage() {
    return (
        <BrowserRouter>
            <div>
                {/*<Cloginscreen /> */}      
                <ListStudents />
            </div>       
        </BrowserRouter>    
    );
}

export default Testpage
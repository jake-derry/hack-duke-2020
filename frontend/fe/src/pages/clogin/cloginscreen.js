import React from "react"
import Login from './loginform'
import {Link} from 'react-router-dom'

function Cloginscreen() {
    return (
        <div>
            <p>This is counselor login screen</p>
            <div> <Login /> </div>
            <Link to='/cpage'>
                <button type="submit" class="btn btn-success">Submit</button>
            </Link>
        </div>
    );
}             

export default Cloginscreen
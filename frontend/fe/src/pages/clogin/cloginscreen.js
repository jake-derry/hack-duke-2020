import React from "react"
import '../../App.css'
import './clogin.css'
import Login from '../../components/loginform'
import {Link} from 'react-router-dom'
import { Container } from "react-bootstrap";

function Cloginscreen() {

    return (
        <div>
            <div> <Login to='/cpage'/> </div>
        </div>
    );
}             

export default Cloginscreen
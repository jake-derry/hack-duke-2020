import React from "react"
import Login from '../../components/loginform'
import {Link} from 'react-router-dom'
import { Container } from "react-bootstrap";

function Cloginscreen() {
    return (
        <Container>
          <h1>Login</h1>
          <Login to="/cpage"/>
        </Container>
    );
}             

export default Cloginscreen
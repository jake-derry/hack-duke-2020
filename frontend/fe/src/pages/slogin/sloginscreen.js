import React from "react"
import { Container } from "react-bootstrap";
import Login from "../../components/loginform";

function Sloginscreen() {
    return (
        <Container>
            <h1>Login</h1>
            <Login to="/spage"/>
        </Container>
    );
}

export default Sloginscreen


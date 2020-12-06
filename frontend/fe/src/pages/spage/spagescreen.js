import React from "react" 
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import Goals from "./goals"

function SPageScreen() {
    return (
        <Container>
            <h1>Student Page</h1>
            <Goals/>
        </Container>
    );  
}

export default SPageScreen
import React from "react" 
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import Students from "./students"

function SPageScreen() {
    return (
        <Container>
            <h1>Student Page</h1>
            <ul>
            <Link to='/slogin'>
                <li>Log Out</li>
            </Link>
            </ul>
            <Students/>
        </Container>
    );  
}

export default SPageScreen
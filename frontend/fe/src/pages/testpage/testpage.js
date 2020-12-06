import React from "react"

import ListStudents from '../../components/list_students'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Col, Container } from "react-bootstrap";

function Testpage() {
    return (
        <BrowserRouter>
            <Container>
              <Col>
                <ListStudents />
              </Col>
            </Container>       
        </BrowserRouter>    
    );
}

export default Testpage
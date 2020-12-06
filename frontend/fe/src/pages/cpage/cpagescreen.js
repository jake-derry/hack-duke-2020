import React from "react" 
import { Button, Col, Container, ListGroup } from "react-bootstrap";
import {Link} from "react-router-dom"
import '../../App.css'
import ListStudents from "../../components/list_students";

const alertClicked = () => {}

function CPageScreen() {

    return (
        <Container>
            <div class="row" >
                <div class="col-lg-3 bg-light">
                  <h2>Groups</h2>
                  <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                  All
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                  Class of 2020
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Class of 2021</ListGroup.Item>
                  <ListGroup.Item as="li">
                  Class of 2022
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Class of 2023</ListGroup.Item>
                  <ListGroup.Item action onClick={alertClicked}>
                    Add group
                  </ListGroup.Item>
                </ListGroup>
                </div>
                <div class="col-lg-9">
                    <h1>Your students</h1>
                    <ListStudents/>
                </div>
            </div>
            
        </Container>               
    );  
}

export default CPageScreen
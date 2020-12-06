import React from "react" 
import { Button, Col, Container, Form, ListGroup } from "react-bootstrap";
import {Link} from "react-router-dom"
import '../../App.css'
import ListStudents from "../../components/list_students";
import TrackListGroup from "../../components/tracks_list_group";

const alertClicked = () => {}

const groups = (
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
  </ListGroup>)

class CPageScreen extends React.Component {
render() {
    return (
        <Container>
            <div class="row" >
                <div class="col-lg-3 bg-light">
                  <h2>Groups</h2>
                  {groups}
                  <h2>Your code</h2>
                  
                </div>
                <div class="col-lg-9">
                    <h1>Your students</h1>
                    <ListStudents/>
                    <h1>Your tracks</h1>
                    <TrackListGroup/>
                    <Button href="/addTrack">+ Add track</Button>
                </div>
            </div>
            
        </Container>               
    );  
  }
}

export default CPageScreen
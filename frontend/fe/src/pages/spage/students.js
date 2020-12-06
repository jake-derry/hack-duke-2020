import React, { Component } from "react"
import axios from 'axios'
import { Button, Card } from "react-bootstrap";

class Goals extends Component {
    state = {
        details : []
    };

    componentDidMount() {

        let data;

        axios.get('http://127.0.0.1:8000/api/goals/', { headers: { 
          'credentials': 'true',
          'Authorization': 'Token ' + localStorage.getItem('token'), 
          'Access-Control-Allow-Headers': '*'}})
        .then(res => {
            data = res.data;
            this.setState({
                details : data
            });
        })
        .catch(err => {})
    }
    

    render() {
        return (
              <div>
                {this.state.details.map(item => (
                <Card key={item.pk}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Body>{item.description}</Card.Body>
                  <Button variant="primary">Resolve</Button>
                </Card>
                ))}
              </div>
        );
    }
}

export default Goals;
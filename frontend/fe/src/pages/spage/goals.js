import React, { Component } from "react"
import axios from 'axios'
import { Button, Card } from "react-bootstrap";

const markComplete = (item) => {
  axios.put('http://127.0.0.1:8000/api/goals/' + item.id, { headers: { 
    'credentials': 'true',
    'Authorization': 'Token ' + localStorage.getItem('token'), 
    'Access-Control-Allow-Headers': '*'}, 
    'title': item.title,
    'description': item.description,
    'completed': true})
  .then(res => {
    
  })
  .catch(err => {})
}

class Goals extends Component {
  constructor() {
    super();
    this.state = {
      details : []
    };
    this.markComplete = this.markComplete.bind(this);
  }

    markComplete(item) {
      axios.put('http://127.0.0.1:8000/api/goals/' + item.id, { headers: { 
        'credentials': 'true',
        'Authorization': 'Token ' + localStorage.getItem('token'), 
        'Access-Control-Allow-Headers': '*'}, 
        'title': item.title,
        'description': item.description,
        'completed': true})
      .then(res => {
        item.completed = true
      })
      .catch(err => {})
    }

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
                <h2>To-dos</h2>
                {this.state.details
                  .filter(item => !item.completed)
                  .map(item => (
                <Card key={item.pk}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Body>{item.description}</Card.Body>
                  <Button variant="primary" onClick={() => this.markComplete(item)}>Mark complete</Button>
                </Card>
                ))}
                <h2>Completed</h2>
                {this.state.details
                  .filter(item => item.completed)
                  .map(item => (
                <Card key={item.pk}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Body>{item.description}</Card.Body>
                  <Button variant="primary" onClick={() => this.markComplete(item)}>Mark complete</Button>
                </Card>
                ))}
              </div>
        );
    }
}

export default Goals;
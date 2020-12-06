import React, { Component } from "react"
import axios from 'axios'
import { Table } from "react-bootstrap";

const list = [
    {
      "title": "my first goal",
      "description": "my first goal's description"
    },
    {
      "title": "another goal!",
      "description": "this is another goal"
    }
];

class Students extends Component {
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {this.state.details.map(item => (
                <tr key={item.pk} >
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                </tr>
                ))}
              </tbody>
            </Table>
        );
    }
}

export default Students;
import React, { Component } from "react"
import axios from 'axios'

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

        axios.get('http://127.0.0.1:8000/api/goals/')
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
                <div key={item.pk} >
                    <h1>{item.title}</h1>
                    <span>{item.description}</span>
                </div>
                ))}
                <span>Hello</span>
            </div>
        );
    }
}

export default Students;
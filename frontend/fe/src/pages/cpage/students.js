import React, { Component } from "react"
import axios from 'axios'

class Counselor extends Component {
    state = {
        details : []
    };

    componentDidMount() {

        let data;

        axios.get('')
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
            </div>
        );
    }
}

export default Counselor;
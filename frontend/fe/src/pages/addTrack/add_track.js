import { findAllByDisplayValue } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class AddTrack extends React.Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {
            title: "",
            description: "",
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.setRedirect = this.setRedirect.bind(this);
        this.add = this.add.bind(this);
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    renderRedirect() {
      if (this.state.redirect) {
        return <Redirect to={"/cpage"} />
      }
    }

    add() {
      var apiUrl = "http://127.0.0.1:8000/api/counselors/me/tracks/"
      axios.post(apiUrl, {headers: { 
        'Authorization': 'Token ' + localStorage.getItem('token'),
        'Access-Control-Allow-Headers': '*'},
        title: this.state.title,
          description: this.state.description
        }, {headers: { 
          'Authorization': 'Token ' + localStorage.getItem('token'),
          'Access-Control-Allow-Headers': '*'}
          })
      .then(res => {
          this.setRedirect()
      })
      .catch(err => {});
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
          <Container>
            {this.renderRedirect()}
            <h1>Add Track</h1>
            <Form>
              <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" type="title" placeholder="Enter title" 
                  onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" type="text" placeholder="Enter description" 
                  onChange={this.handleChange}/>
              </Form.Group>
              <Button variant="primary" onClick={this.add}>
                Submit
              </Button>
            </Form>
          </Container>
        )
    }
}
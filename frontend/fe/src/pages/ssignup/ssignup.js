import { findAllByDisplayValue } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class StudentSignup extends React.Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {
            username: "",
            password: "",
            redirect: false,
            email: "",
            code: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.setRedirect = this.setRedirect.bind(this);
        this.login = this.login.bind(this);

    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    renderRedirect() {
      if (this.state.redirect) {
        return <Redirect to={"/slogin"} />
      }
    }

    login() {
      var apiUrl = "http://127.0.0.1:8000/auth/users/"
      axios.post(apiUrl, {
        username: this.state.username,
        password: this.state.password,
        is_counselor: false,
        email: this.state.email,
        code: this.state.code
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
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="username" placeholder="Enter username" 
                  onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" 
                  onChange={this.handleChange}/>
                <Form.Text>We will never give your email to third party apps</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicCode">
                <Form.Label>Code</Form.Label>
                <Form.Control name="code" type="code" placeholder="Enter your counselor's code" 
                  onChange={this.handleChange}/>
                <Form.Text>You will need to ask your counselor for their unique code</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" 
                  onChange={this.handleChange}/>
              </Form.Group>
              <Button variant="primary" onClick={this.login}>
                Submit
              </Button>
            </Form>
          </Container>
        )
    }
}
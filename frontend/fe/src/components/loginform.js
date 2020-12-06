import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {
            username: "",
            password: "",
            redirect: false,
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
        return <Redirect to={this.props.to} />
      }
    }

    login() {
      var apiUrl = "http://127.0.0.1:8000/auth/token/login/"
      axios.post(apiUrl, {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
          var data = res.data;
          localStorage.setItem('token', data.auth_token)
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
          <div>
            {this.renderRedirect()}
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="username" placeholder="Enter username" 
                  onChange={this.handleChange}/>
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
          </div>
        )
    }
}
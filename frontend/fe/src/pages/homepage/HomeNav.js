import React, { Component } from "react"
import '../../App.css'
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class HomeNav extends Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
        redirect: false
    }
    this.setRedirect = this.setRedirect.bind(this);
    this.logout = this.logout.bind(this);
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

    logout() {
      var apiUrl = "http://127.0.0.1:8000/auth/token/logout"
      axios.post(apiUrl)
      .then(res => {
        localStorage.removeItem('token')
        this.setRedirect()
      })
      .catch(err => {});
    }


  render(props) {
    return (
      <div>            
        {this.renderRedirect()}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Propel Education</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {localStorage.getItem('token') === null || 
                localStorage.getItem('token') === '' ? (
                <div>
                  {console.log(localStorage.getItem('token'))}
                  <NavDropdown title="Login" id="basic-nav-dropdown" inline>
                    <NavDropdown.Item href="/slogin">Student</NavDropdown.Item>
                    <NavDropdown.Item href="/clogin">Counselor</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Signup" id="basic-nav-dropdown" inline>
                    <NavDropdown.Item href="/ssignup">Student</NavDropdown.Item>
                    <NavDropdown.Item href="/csignup">Counselor</NavDropdown.Item>
                  </NavDropdown>
                </div>
              ): (
                <Button onClick={this.logout}>Logout</Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}
}

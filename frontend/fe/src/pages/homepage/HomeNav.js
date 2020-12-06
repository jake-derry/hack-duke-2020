import React from "react"
import '../../App.css'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function HomeNav(props) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Propel Education</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
                <NavDropdown title="Home" id="basic-nav-dropdown" inline>
                  <NavDropdown.Item href="/spage">Student</NavDropdown.Item>
                  <NavDropdown.Item href="/cpage">Counselor</NavDropdown.Item>
                </NavDropdown>
            {/* <Nav.Link href="/">Home</Nav.Link> */}
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
              <Nav.Link href="/logout">Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}



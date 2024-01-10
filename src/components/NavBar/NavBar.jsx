import React, { Component, Fragment } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">Your Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
              <Button variant="outline-light">Sign Up</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavBar;

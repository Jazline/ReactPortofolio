import React from 'react';
import {Navbar,Nav, Button, Form, FormControl } from 'react-bootstrap';

const NavComponent = props => {
    return (
        <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
};


export default NavComponent;
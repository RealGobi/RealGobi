import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';


function Header(props) {
  
  return (
    <Navbar className="border-bottom" expand="lg" bg="transparent" >
    <Navbar.Brand>{props.title}</Navbar.Brand>
    <Navbar.Toggle className="border-0" aria-controls="Navbar toggle" />
    <Navbar.Collapse id="Navbar-toggle">
      <Nav className="ml-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header

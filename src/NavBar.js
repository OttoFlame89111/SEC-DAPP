//import logo from './logo.svg';
import './NavBar.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

function NavBar() {
  return (
    <div className='Container1'>
    <Navbar className="NavBar-orange" expand="lg">
    <Container>
      <Navbar.Brand href="#home">流浪區塊</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="" className="NavBar-Button1"/>
          <Nav.Link href="" className="NavBar-Button2"/>
          <Nav.Link href="" className="NavBar-Button3"/>
          <Nav.Link href="" className="NavBar-Button4"/>
          <Nav.Link href="" className="NavBar-Button5"/>
        </Nav>
      </Navbar.Collapse>
    </Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="" className="NavBar-Button6"/>
          <Nav.Link href="" className="NavBar-Button7"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );

}

export default NavBar;

//import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

function App() {
  return (
    <div className='Container1'>
    <Navbar className="App-orange" expand="lg">
    <Container>
      <Navbar.Brand href="#home">流浪區塊</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="" className="App-Button1"/>
          <Nav.Link href="" className="App-Button2"/>
          <Nav.Link href="" className="App-Button3"/>
          <Nav.Link href="" className="App-Button4"/>
          <Nav.Link href="" className="App-Button5"/>
        </Nav>
      </Navbar.Collapse>
    </Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="" className="App-Button6"/>
          <Nav.Link href="" className="App-Button7"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );

}
//<SwiftSlider data={data} enableNextAndPrev={false} width={480}/>
export default App;

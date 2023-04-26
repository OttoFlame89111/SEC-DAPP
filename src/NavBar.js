import React from "react";
import {Trans} from "react-i18next";
import i18n from 'i18next'
import "./NavBar.css"
import {Navbar, Nav, Container} from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
    if (!this.state.showWarning) {
      i18n.changeLanguage('en');
    }
    else{
      i18n.changeLanguage('TW');
    }
  }
  
  render() {
    return (
      <div className="Container1">
        <Navbar className="NavBar-orange" expand="lg">
        <Container>
          <Navbar.Brand href="#home">流浪區塊</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Button-Container">
              <a href="#" className='NavBar-Button1'>
                <Trans i18nKey='description.navbar1'/></a>
              <a href="#" className='NavBar-Button2'>
                <Trans i18nKey='description.navbar2'/></a>
              <a href="../public/online.html" className='NavBar-Button3'>
                <Trans i18nKey='description.navbar3'/></a>
              <a href="#" className='NavBar-Button4'>
                <Trans i18nKey='description.navbar4'/></a>
              <a href="#" className='NavBar-Button5'>
                <Trans i18nKey='description.navbar5'/></a>
            </Nav>
          </Navbar.Collapse>
        </Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="NavBar-Button6"/>
              <button onClick={this.handleToggleClick} className='NavBar-Button7'/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
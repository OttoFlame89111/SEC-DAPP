import React from "react";
import { Trans } from "react-i18next";
import i18n from 'i18next'
import "./NavBar.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
    if (!this.state.showWarning) {
      i18n.changeLanguage('en');
    }
    else {
      i18n.changeLanguage('TW');
    }
  }

  render() {
    return (
      <div className="Container1">
        <Navbar className="NavBar-orange" expand="lg">
          <Container>
            <Link className='NavBar-Button3' to={"/"}><Navbar.Brand >流浪區塊</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto Button-Container">
                <Link className='NavBar-Button1' to={""}>
                  <Trans i18nKey='description.navbar1' /></Link>
                <Link className='NavBar-Button2' to={"/addpet"}>
                  <Trans i18nKey='description.navbar2' /></Link>
                <Link className='NavBar-Button3' to={"/owner"}>
                  <Trans i18nKey='description.navbar3' /></Link>
                <Link className='NavBar-Button4' to={"/owner"}>
                  <Trans i18nKey='description.navbar4' /></Link>
                <Link className='NavBar-Button3' to={"/owner"}>
                  <Trans i18nKey='description.navbar5' /></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="NavBar-Button6" />
              <button onClick={this.handleToggleClick} className='NavBar-Button7' />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
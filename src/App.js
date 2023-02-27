import React from "react";
import {Trans} from "react-i18next";
import i18n from 'i18next'
import "./NavBar.css"
import {Navbar, Nav, Container} from 'react-bootstrap';
import NavBar from './NavBar';
import Slider from './Slider';
import DogInfo from './DogInfo';

function App(){
	return(
		<div>
			<NavBar/>
			<Slider/>
			<DogInfo/>
		</div>
	);
}

export default App;
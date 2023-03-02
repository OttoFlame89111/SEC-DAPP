import React from "react";
import "./NavBar.css";
import NavBar from './NavBar';
import Slider from './Slider';
import DogInfo from './DogInfo';
import DogAct from "./DogAct";

function App(){
	return(
		<div>
			<NavBar/>
			<Slider/>
			<DogInfo/>
			<DogAct/>
		</div>
	);
}

export default App;
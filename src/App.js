import React from "react";
import "./NavBar.css";
import NavBar from './NavBar';
import Slider from './Slider';
import DogInfo from './DogInfo';
import DogAct from "./DogAct";
import ProductSpecial from "./ProductSpecial";
import Footer from "./Footer";

function App(){
	return(
		<div>
			<NavBar/>
			<Slider/>
			<DogInfo/>
			<DogAct/>
			<ProductSpecial/>
			<Footer/>
		</div>
	);
}

export default App;
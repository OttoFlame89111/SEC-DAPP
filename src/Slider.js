//import logo from './logo.svg';
import './Slider.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import SwiftSlider from 'react-swift-slider';

function Slider() {
	/*const images = [
		{'id':'1','src': require('./img/Carousel1.png')},
		{'id':'2','src': require('./img/Carousel1.png')},
		{'id':'3','src': require('./img/Carousel1.png')},
	];*/
  return (
    <div className='Container2'>
	  <Carousel controls={false}>
		<Carousel.Item interval={5000}>
			<img
			className="d-block w-100"
			src={require("./img/Carousel1.png")}
			alt="First slide"
			/>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
			<img
			className="d-block w-100"
			src={require("./img/Carousel1.png")}
			alt="Second slide"
			/>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
			<img
			className="d-block w-100"
			src={require("./img/Carousel1.png")}
			alt="Third slide"
			/>
		</Carousel.Item>
	  </Carousel>
    	{/*<SwiftSlider data={images} enableNextAndPrev={false} showDots={false}/>*/}
    </div>
  );

}

export default Slider;
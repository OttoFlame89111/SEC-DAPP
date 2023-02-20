//import logo from './logo.svg';
import './Slider.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import SwiftSlider from 'react-swift-slider';

function Slider() {
	const images = [
		{'id':'1','src': require('./img/Carousel1.png')},
		{'id':'2','src': require('./img/Carousel1.png')},
		{'id':'3','src': require('./img/Carousel1.png')},
	];
  return (
    <div className='Container2'>
    	<SwiftSlider data={images} enableNextAndPrev={false} showDots={false}/>
    </div>
  );

}
//<SwiftSlider data={data} enableNextAndPrev={false} width={480}/>
export default Slider;
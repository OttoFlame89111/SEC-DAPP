//import logo from './logo.svg';
import './DogInfo.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

function DogInfo() {
  return (
    <div className='Container3'>
    	<span className='Container3-title'>浪浪特寫照</span>
      <span className='Container3-text'>如果可以收藏我們資助我們資助吧~</span>
      <br/>{/*換行*/}
      <div className='Container3-Picture'>
        <div className='Container3-pic1'/>
        <div className='Container3-pic2'/>
        <div className='Container3-pic3'/>
        <div className='Container3-pic4'/>
      </div>
      <div className='Container3-bottom'>
        <div className='Container3-rightArrow'/>
        <button className='Container3-button' onClick={window.location.href="#"} />
        <div className='Container3-leftArrow'/>
      </div>
    </div>
  );
}
export default DogInfo;
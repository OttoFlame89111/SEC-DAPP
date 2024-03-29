//import logo from './logo.svg';
import './DogInfo.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

function DogInfo() {
  useTranslation();
  async function connectWallet(){
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.enable();
    }
  }
  return (
    <div className='Container3'>
      <span className='Container3-title'>
        <Trans i18nKey='description.container3_title' /></span>
      <span className='Container3-text'>
        <Trans i18nKey='description.container3_text' /></span>
      <br />
      <div className='Container3-Picture'>
        <div className='Container3-pic1' />
        <div className='Container3-pic2' />
        <div className='Container3-pic3' />
        <div className='Container3-pic4' />
      </div>
      <div className='Container3-bottom'>
        <div className='Container3-rightArrow' />
        <button onClick={connectWallet} className='Container3-button' />
        <div className='Container3-leftArrow' />
      </div>
    </div>
  );
}

export default DogInfo;
import React, { useState } from 'react';
import { ethers } from 'ethers';
import abi from './abi.json';

const contractAddress = '0xe76297Bfd415Bca7D29868283db6F70E638da1Ee'

function Addpet(){
  const [value, setTheValue] = useState('');
  const [name, setTheName] = useState('');
  const [species, setTheSpecies] = useState('');
  const [imageURL, setTheImageURL] = useState('');
  
  async function getValue() {
    const provider = new ethers.providers.InfuraProvider('goerli');
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const response = await contract.getUnadoptedPets();
    setTheValue(response.length);
    console.log(response);
    //console.log(response[1].name);
  }
  
  async function setValue(name,species,imageURL) {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.addPet(name,species,imageURL);
      await tx.wait();
      getValue();
    }
  }

  let getTheName="";
  let getTheSpecies="";
  let getTheImageURL="";

    return(
        <form action="">
            <div style={{marginTop: 50}}
            ></div>
            名字:<input type="text" onChange={e => getTheName=e.target.value} />
            <div style={{marginTop: 50}}
            ></div>
            詳情介紹:<input type="text" onChange={e => getTheSpecies=e.target.value} />
            <div style={{marginTop: 50}}
            ></div>

            圖片 URL:<input type="text" onChange={e => getTheImageURL=e.target.value} />
            <div style={{marginTop: 50}}
            ></div>

            <button type="button" onClick={() => setValue(getTheName,getTheSpecies,getTheImageURL)}>送出</button>

            <button type="button" onClick={getValue}>取得資料</button>
            <div style={{marginTop: 200}}
            ></div>

        </form>
    )
}

export default Addpet;

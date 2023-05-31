import React from 'react';
import { ethers } from 'ethers';
import abi from './abi.json';
import styles from "./index.module.css";

const contractAddress = '0xf6271A9a7591EA7EF07044024F3c9A4556d12C91'
//const contractAddress = '0xe76297Bfd415Bca7D29868283db6F70E638da1Ee'

function Addpet(){
  
  async function getValue() {
    const provider = new ethers.providers.InfuraProvider('goerli');
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const response = await contract.getUnadoptedPets();
    console.log(response);
  }
  
  async function setValue(name,age,imageURL) {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.addPet(name,age,imageURL);
      await tx.wait();
      getValue();
    }
  }

  async function setAdoptPet(id) {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.adoptPet(id);
      await tx.wait();
      getValue();
    }
  }

  let getTheName="";
  let getTheage="";
  let getTheImageURL="";
  let getTheId="";

    return(
      
      
      
      <div>
         <img src={require('../../img/ownerbanner.jpg')} style={{ width: "100%" }} alt=""></img>
        <form action="">
            <div style={{marginTop: 50}}
            ></div>
            <button className={styles["button"]}>
            名字
            </button>
          <input type="text" onChange={e => getTheName=e.target.value} />
            <div style={{marginTop: 50}}
            ></div>
            <button className={styles["button"]}>
            年紀
            </button>
            <input type="text" onChange={e => getTheage=e.target.value} />
            <div style={{marginTop: 50}}
            ></div>

            <button className={styles["button"]}>
            圖片 URL
            </button>
            <input type="text" onChange={e => getTheImageURL=e.target.value} />
            <div style={{marginTop: 50}}
            ></div>

            <button type="reset" onClick={() => setValue(getTheName,getTheage,getTheImageURL)}>送出</button>

            <button type="button" onClick={getValue}>取得資料</button>
            <div style={{marginTop: 200}}
            ></div>

        </form>
        <form>
        
        <button className={styles["button"]}>
            ID
            </button>
            <input type="text" onChange={e => getTheId=e.target.value} />
            <div style={{marginTop: 50}}
            ></div>

            <button type="reset" onClick={() => setAdoptPet(getTheId)}>送出</button>

            <button type="button" onClick={getValue}>取得資料</button>
            <div style={{marginTop: 200}}
            ></div>
        </form>
      </div>
    )
}

export default Addpet;

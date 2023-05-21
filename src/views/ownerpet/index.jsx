import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { ethers } from 'ethers';
import abi from '../addpet/abi.json';
//import { message } from "antd";



const contractAddress = '0xf6271A9a7591EA7EF07044024F3c9A4556d12C91'

function Ownerpet() {
  const [list, setList] = useState([])

  useEffect(() => {
    queryData();
  }, [])



    const queryData = async () => {
    const provider = new ethers.providers.InfuraProvider('goerli');
    const contract = new ethers.Contract(contractAddress, abi, provider);

    

  const [account] = await window.ethereum.request({                 
    method: 'eth_requestAccounts'   
  });  
   
  const response = await contract.getAdoptedPets(account);  
  setList(response);

  }
  
  


  return (
    <div className={styles["container"]}>
      <img src={require('../../img/ownerbanner.jpg')} style={{ width: "100%" }} alt=""></img>
      <div className={styles["content"]}>
        <button className={styles["button"]} style={{ marginTop: 20 }}>
          我已經認養了的寵物
        </button>
        <div className={styles["list"]}>
          {
            list.map(item => <div className={styles["item"]}>
              <div className={styles["item-img"]}>
                <img src={item[3]} className={styles["item-img-img"]} alt="" />
              </div>
              <div style={{ fontSize: 29, textAlign: "center" }}>
                <span>{item[1]}/</span>
                <span>{item[2]}岁</span>
              </div>
              
            </div>)
          }
        </div>
      </div>
    </div >
  );
}

export default Ownerpet;
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { ethers } from 'ethers';
import abi from '../addpet/abi.json';
import { message } from "antd";

const contractAddress = '0xf6271A9a7591EA7EF07044024F3c9A4556d12C91'

function Owner() {
  const [list, setList] = useState([])

  useEffect(() => {
    queryData();
  }, [])



  const queryData = async () => {
    //const provider = new InfuraProvider("sepolia")
    const provider = new ethers.providers.InfuraProvider('goerli');
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const response = await contract.getUnadoptedPets();
    setList(response);
    console.log(response);
  }

  const renyang = async (item) => {
    if (typeof window.ethereum !== 'undefined') {
      message.loading({
        content: "認養中"
      });
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      let id = item[0].toString();
      console.log("id", id);
      const tx = await contract.adoptPet(id);
      let res = await tx.wait();
      console.log("res", res);
      message.info("認養成功");

      queryData();
    }

  }
  return (
    <div className={styles["container"]}>
      <img src={require('../../img/ownerbanner.jpg')} style={{ width: "100%" }} alt=""></img>
      <div className={styles["content"]}>
        <button className={styles["button"]}>
          認養計畫
        </button>
        <div className={styles["f1"]}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
          bomaking it. over o vears olde richard countock. a Latin protessor at hampsden-Sydney College in Virginia,
          looked  up one of the more obscure Latin words,consectetur,from a Lorem Ipsum passage,and going througn the cites of the word in classical
        </div>
        <div style={{ display: "flex", marginTop: 30, flexWrap: "wrap" }}>
          <img alt="" style={{ width: "30%" }} src={require('../../img/left.jpg')}></img>
          <div style={{ marginLeft: 20, display: "flex", flexDirection: "column", alignItems: "flex-start", flex: 1 }}>
            <button className={styles["button"]}>
              認養搜尋
            </button>
            <div style={{ display: "flex", alignItems: "center", marginTop: 10, justifyContent: "center" }}>
              <img src={require('../../img/zhang.jpg')} style={{ height: 40, marginRight: 10 }} alt=""></img>
              <span>類別:</span>
              <img src={require('../../img/dropdown.jpg')} style={{ height: 40, marginLeft: 10 }} alt=""></img>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
              <img src={require('../../img/zhang.jpg')} style={{ height: 40, marginRight: 10 }} alt=""></img>
              <span>種類:</span>
              <img src={require('../../img/dropdown.jpg')} style={{ height: 40, marginLeft: 10 }} alt=""></img>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
              <img src={require('../../img/zhang.jpg')} style={{ height: 40, marginRight: 10 }} alt=""></img>
              <span>地區:</span>
              <img src={require('../../img/dropdown.jpg')} style={{ height: 40, marginLeft: 10 }} alt=""></img>
            </div>

            <button className={styles["button2"]}>
              搜尋
            </button>

          </div>

        </div>
        <button className={styles["button"]} style={{ marginTop: 20 }}>
          認養愛心毛小孩
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
              <div onClick={() => {
                renyang(item)
              }} style={{ cursor: "pointer", width: "200px", marginTop: 10, height: 40, borderRadius: "20px", backgroundColor: "#f5b23e", textAlign: "center", lineHeight: "40px", fontWeight: "bold" }}>認養</div>
            </div>)
          }
        </div>
      </div>
    </div >
  );
}

export default Owner;
import React, { useState } from "react";
import styles from "./index.module.css";
function Owner() {
  const [list] = useState([
    {
      image: require("../../img/pet1.jpg")
    },
    {
      image: require("../../img/pet2.jpg")
    },
    {
      image: require("../../img/pet3.jpg")
    },
    {
      image: require("../../img/pet4.jpg")
    },
    {
      image: require("../../img/pet5.jpg")
    },
    {
      image: require("../../img/pet6.jpg")
    },
  ])
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
            list.map(item => <div className={styles["item"]}><img src={item.image} className={styles["item-img"]} alt="" /></div>)
          }
        </div>
      </div>
    </div >
  );
}

export default Owner;
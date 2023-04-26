import React from "react";
import Slider from '../../Slider';
import DogInfo from '../../DogInfo';
import DogAct from "../../DogAct";
import ProductSpecial from "../../ProductSpecial";

function Home() {
  return (
    <div>
      <Slider />
      <DogInfo />
      <DogAct />
      <ProductSpecial />
    </div>
  );
}

export default Home;
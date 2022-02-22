import React from "react";
import { gear } from "../data/gear.js";
// import "../images";

const Gear = () => {
  console.table(gear);
  return (
    <div>
      
       {gear.map((gearDetail) => {
        return (
          <div>
            <h1>{gearDetail.name}</h1>
            <h2>{gearDetail.price}</h2>
            <img src={gearDetail["image-main"]} alt={gearDetail.key} width="200px"></img>
            <img src={gearDetail["image-hover"]} alt={gearDetail.key} width="200px"></img>
          </div>
        );
      })}
    </div>
  );
};

export default Gear;

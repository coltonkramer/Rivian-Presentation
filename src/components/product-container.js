import React from "react";
import { gear } from "../data/gear.js";
import { gearItem, gearContainer, gearItemHover } from "./style.module.css";

const Gear = () => {
  // console.table(gear);

  return (
    <div className={gearContainer}>
      {gear.map((gearDetail) => {
        let imageMain = gearDetail["image-main"];
        let imageHover = gearDetail["image-hover"];

        const gearMainStyle = {
          backgroundImage: "url(" + imageMain + ")",
        };
        const gearHoverStyle = {
          backgroundImage: "url(" + imageHover + ")",
        };

        return (
          <div>
            <article className={gearItem} style={gearMainStyle}>
              <p style={{ backgroundColor: "lightblue" }}>{gearDetail.name}</p>
              <p>{gearDetail.price}</p>
            </article>
            <article className={gearItemHover} style={gearHoverStyle}>
            <p style={{ backgroundColor: "lightblue" }}>{gearDetail.name}</p>
              <p>{gearDetail.price}</p>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Gear;

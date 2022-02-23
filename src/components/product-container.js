import React from "react";
import { gear } from "../data/gear.js";
import { gearItem, gearContainer, gearItemHover, gearItemImage, articleContainer } from "./style.module.css";

const Gear = () => {
  // console.table(gear);

  return (
    <div className={gearContainer}>
      {gear.map((gearDetail) => {
        let imageMain = gearDetail["image-main"];
        let imageHover = gearDetail["image-hover"];

        return (
          <div className={articleContainer}>
            <article className={gearItem}>
              <img src={imageMain} class = {gearItemImage} alt=""></img>
              <div>
              <p>{gearDetail.name}</p>
              <p>{gearDetail.price}</p>
              </div>
            </article>
            <article className={gearItemHover}>
            <img src={imageHover} class = {gearItemImage} alt=""></img>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Gear;

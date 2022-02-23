import React from "react";
import { gear } from "../data/gear.js";
import { gearItem, gearContainer, gearItemHover, gearItemImage, articleContainer, gearInfo } from "./style.module.css";

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
              <div class = {gearItemImage}>
              <img src={imageMain} alt=""></img>
              </div>
              <div className={gearInfo}>
              <p>{gearDetail.name}</p>
              <p>{gearDetail.price}</p>
              </div>
            </article>
            <article className={gearItemHover}>
              <div class = {gearItemImage}>
                <img src={imageHover} alt=""></img>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Gear;

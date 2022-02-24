import React from "react";
import { gear } from "../data/gear.js";
import { gearItem, gearContainer, gearItemHover, gearItemImage, articleContainer, gearInfo } from "./style.module.css";

const Gear = () => {
  // No logic required here so we go straight to a return
  return (
// Create a container to hold our component
    <div className={gearContainer}>
{/* Get everything out of the javascript object and display it to the screen */}
      {gear.map((gearDetail) => {
        // Save image-main and image-hover to variables so we dont
        // need to type it out
        let imageMain = gearDetail["image-main"];
        let imageHover = gearDetail["image-hover"];
        let name = gearDetail.name;
        let price = gearDetail.price;

        // A return for our map function which actually returns the content
        return (
          <div className={articleContainer} key={gearDetail.key}>
            {/* Using an article to hold the product name, price, and images */}
            <article className={gearItem} >
              {/* Continer to hold the image */}
              <div className={gearItemImage}>
              <img src={imageMain} alt=""></img>
              </div>
              {/* Creating a container that can be flexed to place the name and price in the right spot */}
              <div className={gearInfo}>
              <p>{name}</p>
              <p>{price}</p>
              </div>
            </article>
            {/* Added a second article to replace the first when the mouse hovers over it */}
            <article className={gearItemHover}>
              <div className={gearItemImage}>
                <img src={imageHover} alt=""></img>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

// Exports the component back to the index.js
export default Gear;

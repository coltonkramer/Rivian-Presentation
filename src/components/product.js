import React from "react";
import { gear } from "../data/gear.js";
import i from "./product-container.js"
import {
    articleContainer,
    gearItem,
    gearItemImage,
    gearInfo,
    gearItemHover,
} from "./style.module.css";
const Product = () => {
    
  // A return for our map function which actually returns the content

//   gear.map((gearDetail) => {
    // Save gearDeatil elements to variables so we dont
    // need to type them out
    let imageMain = gear[i]["image-main"];
    let imageHover = gear[i]["image-hover"];
    let name = gear[i].name;
    let price = gear[i].price;
    let key = gear[i].key
    return (
      <div className={articleContainer} key={key}>
        {/* Using an article to hold the product name, price, and images */}
        <article className={gearItem}>
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
}

//   );
// };

// Exports the component back to the index.js
export default Product;

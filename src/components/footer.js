import React from "react";
import { footerStyle } from "./style.module.css";



const Footer = () => {
    return (
      <div className={footerStyle}>
        <p>Built with Gatsby and React</p>
        <p>The project has no official affiliation with Rivian or any company associated with Rivain</p> 
      </div>
    );
  };
  
  export default Footer;
  
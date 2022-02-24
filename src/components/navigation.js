import * as React from "react";
import {
  container,
  headerContainer,
  navContainerStyle,
  navElementStyle,
  menuItemStyle,
} from "./style.module.css";
import Carousel from "./carousel.js";

// Creates a component for the nav bar
const Navigation = () => {
  // No logic here so we are just returning the elements
  return (
    // A container to hold the entire element
    <div className={container}>
      {/* Adding a header element for semantics */}
      <header className={headerContainer}>
        {/* Get the component for the carousel and puts it here */}
        <Carousel />
        <div className={navContainerStyle}>
          {/* Creates an image tag and puts the header logo inside */}
          <img
            src="https://images.rivian.com/2md5qhoeajym/57NSS2kAXCVoGLLPAgbLcG/898d1b6e94f24ce50ea243d56913fb6c/header_logo.svg"
            alt="Rivian Logo"
          ></img>
          {/* The nav buttons live in this container */}
          <nav>
            <ul className={navElementStyle}>
              
                <li key="nav0" className={menuItemStyle}><a href="https://rivian.com/r1t">R1T</a></li>
                <li key="nav1" className={menuItemStyle}><a href="https://rivian.com/r1s">R1S</a></li>
                <li key="nav2" className={menuItemStyle}><a href="https://rivian.com/gear-shop">Gear Shop</a></li>
                <li key="nav3" className={menuItemStyle}><a href="https://rivian.com/fleet">Fleet</a></li>
            </ul>
          </nav>
          {/* The sign in button */}
          <p>Sign In</p>
        </div>
      </header>
    </div>
  );
};

// Export the component
export default Navigation;

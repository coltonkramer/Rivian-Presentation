import React from "react";
import { carousel, navArrows, heroImage, carouselDescription, carouselNavigation } from "./style.module.css";

// import { StaticImage } from 'gatsby-plugin-image'
import { useState } from "react";

const images = [
  {
    title: "Mountains",
    subtitle: "Preserving the natural world. Forever.",
    img: "https://images.rivian.com/2md5qhoeajym/1GsZqMnU6h1XADrarnYVTG/db673c5103a23e4617120673cd6842ac/Homepage_-_Image_Carousel_-_Slide_1_desktop.jpg?fm=webP",
    value: "1",
  },
  {
    title: "Truck",
    subtitle: "The world’s first electric truck on the assembly line.",
    img: "https://images.rivian.com/2md5qhoeajym/3LXNrO8Q8QzpToovYBpXD9/239bc51a0ce5a86207d41729d9abd166/2.jpg?fm=webP",
    value: "2",
  },
  {
    title: "Cafe",
    subtitle: "Preserving the natural world. Forever.",
    img: "https://images.rivian.com/2md5qhoeajym/O8I8PXKUbyi8FqKqWj3ib/01e2a366e911cd8857584846dcb0fdd7/3.jpg?fm=webP",
    value: "3",
  },
  {
    title: "Interior",
    subtitle: "Coming Together to build the future.",
    img: "https://images.rivian.com/2md5qhoeajym/7warGbZSv8vKMh27b0HKcm/ddeec8367e44b2573906ff96cb40595a/4.jpg?fm=webP",
    value: "4",
  },
];
// Create the carousel component
const Carousel = () => {
  // Use a use state to keep track of which image is being displayed
  // Defaults to 0 images i.e. the first image in the array
  const [currentImage, setCurrentImage] = useState(0);

  return (
    // Returns the div holding the carousel component
    <div className={carousel}>
      {/* Creates an image tag that holds all the attribute of the image */}
      <img
        className={heroImage}
        src={images[currentImage].img}
        alt={images[currentImage].subtitle}
        title={images[currentImage].title}
      ></img>
        <div className={carouselNavigation}>
          <div className={carouselDescription}>
          <p>{images[currentImage].subtitle}</p>
          </div>
      {/* Container for the arrows to control ther carousel */}
      <div className={navArrows}>
        <button
          aria-label="Carousel Scroll Previous"
          className="leftArrowContainer"
          tabIndex={0}
          onKeyDown={this}
          onClick={() => {
            setCurrentImage(() => {
              // When we click the button if the carousel usestate is already at 0 we set it to the last item in the array
              if (currentImage === 0) {
                return images.length - 1;
              } else {
                // Otherwise we subtract 1 from the currentImage
                return currentImage - 1;
              }
            });
          }}
        >
          {/* Uses the svg from the rivian site for the left and right arrows */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20L4 12L12 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
            <line
              x1="5"
              y1="12"
              x2="21"
              y2="12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></line>
          </svg>
        </button>
        <div>
          <span>{images[currentImage].value}</span>/4
        </div>
        <button
          aria-label="Carousel Scroll Next"
          className="rightArrowContainer"
          tabIndex={0}
          onKeyDown={this}
          onClick={() => {
            setCurrentImage(() => {
              if (currentImage === images.length - 1) {
                return 0;
              } else {
                return currentImage + 1;
              }
            });
          }}
        >
          {/* right arrow svg */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20L20 12L12 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
            <line
              x1="1"
              y1="-1"
              x2="17"
              y2="-1"
              transform="matrix(-1 0 0 1 20 13)"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></line>
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
};
// exports the carousel component imported in navigation.js 
export default Carousel;

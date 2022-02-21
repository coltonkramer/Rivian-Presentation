import React from "react";
import { carousel, navArrows, heroImage } from './style.module.css'

// import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react';

const images = [
    { title: "Mountains", subtitle: "Preserving the natural world. Forever.", img: "https://images.rivian.com/2md5qhoeajym/1GsZqMnU6h1XADrarnYVTG/db673c5103a23e4617120673cd6842ac/Homepage_-_Image_Carousel_-_Slide_1_desktop.jpg?fm=webP", value:"1"},
    { title: "Truck", subtitle: "The world’s first electric truck on the assembly line.", img: "https://images.rivian.com/2md5qhoeajym/3LXNrO8Q8QzpToovYBpXD9/239bc51a0ce5a86207d41729d9abd166/2.jpg?fm=webP" , value:"2"},
    { title: "Cafe", subtitle: "Preserving the natural world. Forever.", img: "https://images.rivian.com/2md5qhoeajym/3Zv068QmGvRcdZmPUkZgnd/24e8d377ed9339ac7db29e8b613f9633/Home_-_Spaces_-_Venice_-_mobile.jpg?w=768&fm=webp", value:"3"},
    { title: "Interior", subtitle: "The world’s first electric truck on the assembly line.", img: "https://images.rivian.com/2md5qhoeajym/4cYIxgFfvYSq4zIAqQNFSG/81320b7d04ebf6ac2fd3f24c699bf1a6/GearGuard-Thumbnail-mobile.jpg?w=768&fm=webp" , value:"4"}
]

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div className={carousel}>
            <img class={heroImage} src={images[currentImage].img} alt={images[currentImage].subtitle} title={images[currentImage].title}></img>
            <div className={navArrows}>
                <div className="left" onClick={()=>{
                    setCurrentImage(()=>{
                        if (currentImage === 0){
                            return images.length - 1;
                        }
                        else{
                            return currentImage - 1;
                        }})
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20L4 12L12 4" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path><line x1="5" y1="12" x2="21" y2="12" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></line></svg>

                </div>
            <div><span>{images[currentImage].value}</span>/4</div>
            <div className="right" onClick={()=>{
                    setCurrentImage(()=>{
                        if (currentImage === images.length - 1){
                            return 0;
                        }
                        else{
                            return currentImage + 1
                        }})
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20L20 12L12 4" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path><line x1="1" y1="-1" x2="17" y2="-1" transform="matrix(-1 0 0 1 20 13)" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></line></svg>

                </div>
            </div>
        </div>
        
    )
};
export default Carousel;
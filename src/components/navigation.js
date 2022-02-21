import * as React from 'react'
import { container, headerContainer, navContainerStyle, navElementStyle, menuItemStyle } from './style.module.css'
import  Carousel  from './carousel.js'

const Navigation = () => {
  return (
    <div class={container}>
      <header class={headerContainer}>
      <Carousel/>
        <div class={navContainerStyle}>
        <img src="https://images.rivian.com/2md5qhoeajym/57NSS2kAXCVoGLLPAgbLcG/898d1b6e94f24ce50ea243d56913fb6c/header_logo.svg" alt="Rivian Logo"></img>
        <nav>
        <ul class={navElementStyle}>
          <li class={menuItemStyle}>R1T</li>
          <li class={menuItemStyle}>R1S</li>
          <li class={menuItemStyle}>Gear Shop</li>
          <li class={menuItemStyle}>Fleet</li>
        </ul>
        </nav>
        <p>Sign In</p>
        </div>
      </header>
    </div>
  )
}

export default Navigation

import * as React from 'react'
import { Link } from 'gatsby'
import { container, headerContainer, navContainerStyle, navElementStyle, menuItemStyle, headerImage } from '../components/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
    <div class={container}>
      <title>{pageTitle}</title>
      <header class={headerContainer}>
      <StaticImage class={headerImage}
          alt="Mountins"
          src="https://images.rivian.com/2md5qhoeajym/1GsZqMnU6h1XADrarnYVTG/db673c5103a23e4617120673cd6842ac/Homepage_-_Image_Carousel_-_Slide_1_desktop.jpg?fm=webP"
          
          />
          <StaticImage 
          alt="Truck assmebly line"
          src="https://images.rivian.com/2md5qhoeajym/3LXNrO8Q8QzpToovYBpXD9/239bc51a0ce5a86207d41729d9abd166/2.jpg?fm=webP"
          />
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
      <main>
        <h1>{pageTitle}</h1>
        {children}
<Link to="/about">About Me</Link>
      </main>
    </div>
  )
}

export default Layout

      
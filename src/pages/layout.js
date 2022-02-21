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
        <h2>Sign In</h2>
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

      
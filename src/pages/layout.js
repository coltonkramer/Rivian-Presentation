import * as React from 'react'
import { Link } from 'gatsby'
import { container, navContainerStyle, navElementStyle } from '../components/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div class={container}>
      <title>{pageTitle}</title>
      <nav class={navContainerStyle}>
        <img src="https://images.rivian.com/2md5qhoeajym/57NSS2kAXCVoGLLPAgbLcG/898d1b6e94f24ce50ea243d56913fb6c/header_logo.svg" alt="Rivian Logo"></img>
        <ul class={navElementStyle}>
          <li >R1T</li>
          <li>R1S</li>
          <li>Gear Shop</li>
          <li>Fleet</li>
        </ul>
        <h2>Sign In</h2>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
<Link to="/about">About Me</Link>
      </main>
    </div>
  )
}

export default Layout

      
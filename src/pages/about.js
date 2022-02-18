// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <p>Hello... My name is Colton Kramer. I am a frontend developer in training. Thank you for visiting my page!</p>
      <Link to="/">Home</Link>
    </main>
  )
}

// Step 3: Export your component
export default AboutPage
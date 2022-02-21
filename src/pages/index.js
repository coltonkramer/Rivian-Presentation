// Step 1: Import React
import * as React from "react";
import SEO from "react-helmet";
import Navigation from "../components/navigation.js";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <SEO />
      <div>
        <Navigation />
      </div>
      <main>
        <p>This is some sample text</p>
      </main>
    </div>
  );
};

// Step 3: Export your component
export default IndexPage;

// Step 1: Import React
import * as React from "react";
import Seo from "react-helmet";
import Navigation from "../components/navigation.js";
import Gear from "../components/product-container.js"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <Seo />
      <div>
        <Navigation />
      </div>
      <main>
        <Gear/>
      </main>
    </div>
  );
};

// Step 3: Export your component
export default IndexPage;

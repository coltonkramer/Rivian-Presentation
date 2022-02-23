// Step 1: Import React
import * as React from "react";
import Seo from "react-helmet";
import Navigation from "../components/navigation.js";
import Gear from "../components/product-container.js"



// Step 2: Define your component
const IndexPage = () => {
  return (
    <>
  
    <head>
      {/* Meta info for the website     */}
      <Seo/>
    </head>
      <section>
        {/* Component for the nav bar */}
        <Navigation />
      </section>
      <main>
        <section>
        <h1>Gear Shop</h1>
          {/* Component for the gear shop */}
        <Gear/>
        </section>
      </main>
    </>
  );
};

// Step 3: Export your component
export default IndexPage;

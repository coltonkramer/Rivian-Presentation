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
      <Seo/>
    </head>
      <section>
        <Navigation />
      </section>
      <main>
        <section>
        <Gear/>
        </section>
      </main>
    </>
  );
};

// Step 3: Export your component
export default IndexPage;

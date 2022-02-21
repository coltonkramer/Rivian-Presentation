// Step 1: Import React
import * as React from "react";
import { Helmet } from "react-helmet"
import Navigation from "../components/navigation.js";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <Helmet lang="en">
          <meta charSet="utf-8" />
          <title>Rivian | Mock Homepage</title>
          <descripton>A rebuild of the rivian homepage and product catalog for a presentation</descripton>
          
        </Helmet>
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

// Step 1: Import React
import * as React from "react";
import Seo from "../components/helmet.js";
import Navigation from "../components/navigation.js";
import Gear from "../components/product-container.js"
import Footer from "../components/footer.js"




// Step 2: Define your component
const IndexPage = () => {

  
  return (
    <>
    {/* Meta info for the website     */}
    <Seo/>
  
    
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
      <footer>
        {/* Create the footer component */}
      <Footer/>
      </footer>
    </>
  );
};

// Step 3: Export your component
export default IndexPage;

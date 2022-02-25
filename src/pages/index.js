// Step 1: Import React
import * as React from "react";
import Seo from "../components/helmet.js";
import Navigation from "../components/navigation.js";
import Gear from "../components/product-container.js"
import Footer from "../components/footer.js"




// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
    {/* Meta info for the website     */}
    <Seo/>
      <section>
        {/* Component for the nav bar */}
        <Navigation />
      </section>
      <main>
        <section>
          {/* Component for the gear shop */}
        <Gear/>
        </section>
      </main>
      <footer>
        {/* Create the footer component */}
      <Footer/>
      </footer>
    </div>
  );
};

// Step 3: Export your component
export default IndexPage;

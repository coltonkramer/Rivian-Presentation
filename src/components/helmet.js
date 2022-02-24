import React from "react";
import Helmet from "react-helmet";

const Seo = () => {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="#" />
        </Helmet>
      </div>
    );

};

export default Seo;

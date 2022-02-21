import React from "react";
import Helmet from "react-helmet";

const SEO = () => (
  <Helmet
    htmlAttributes={{
      lang: "en",
      title: "Rivian | Mockbuild",
      description:
        "A rebuild of the rivian homepage and product catalog for a presentation",
      author: "Colton Kramer",
    }}
  />
);

export default SEO;

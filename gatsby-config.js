module.exports = {
    siteMetadata: {
        title: `Rivian | Mockbuild`,
        description: `A rebuild of the rivian homepage and product catalog for a presentation`,
        author: `Colton Kramer`,
    
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        // {
        //     resolve: `gatsby-source-mongodb`,
        //     options: { dbName: `local`, collection: `documents` },
        //     query: { documents: { as_of: { $gte: 1604397088013 } } },
        //   },
        
    ],
};
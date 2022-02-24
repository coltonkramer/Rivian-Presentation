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
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
              lang: 'en-GB'
            }
          }
        
    ],
};
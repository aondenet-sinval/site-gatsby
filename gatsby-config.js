/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Desenvolvendo com Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `product`,
        path: `${__dirname}/product`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
  ]
};

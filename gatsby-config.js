module.exports = {
  siteMetadata: {
    title: `Ejiro Lennox`,
    description: `I create thoughtful musical experiences for your next project`,
    author: `Ejiro Lennox`,
    logo: "./src/images/ejiro.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

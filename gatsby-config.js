require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `richen.dev`,
    description: `I'm a software engineer specialized in frontend and backend development for complex scalable web apps. Check out my project portfolio and online resume!`,
    author: {
      name: "Richard Henninger",
      email: "richard@richen.dev",
    },
    image: `richen-image.png`,
    socials: {
      twitter: "https://twitter.com/_richenn",
      linkedin: "https://www.linkedin.com/in/richenn/",
      github: "https://github.com/richen604",
      instagram: "https://www.instagram.com/rich6oh4/",
      stackoverflow: "https://stackoverflow.com/users/story/15002438",
      medium: "https://medium.com/@richardhenninger",
      codepen: "https://codepen.io/richen604",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/richen-portfolio-logo-512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_TRACKING_ID, // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
  ],
}

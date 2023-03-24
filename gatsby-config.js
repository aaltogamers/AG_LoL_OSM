const { translations } = require("./src/translations");

module.exports = {
  siteMetadata: {
    title: `.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/square.png",
        name: translations.tournamentTitle.fi,
        short_name: translations.tournamentTitleShort.fi,
        description: translations.siteDescription.fi,
        start_url: `/*`,
        lang: "fi",
        display: `standalone`,
        localize: [
          {
            start_url: `/`,
            lang: `en`,
            name: translations.tournamentTitle.en,
            short_name: translations.tournamentTitleShort.en,
            description: translations.siteDescription.en,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-223358482-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logos",
        path: "./src/logos",
      },
      __key: "logos",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `finnishContent`,
        path: `./src/content/finnish/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `englishContent`,
        path: `./src/content/english/`,
      },
    },
    {
      resolve: "gatsby-background-image",
    },
  ],
};

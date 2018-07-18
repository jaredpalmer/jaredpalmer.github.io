module.exports = {
  siteMetadata: {
    siteName: `Jared Palmer`,
    siteUrl: `https://jaredpalmer.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/_posts/`,
        name: `pages`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-highlights',
            options: {},
          },
        ],
      },
    },
  ],
};

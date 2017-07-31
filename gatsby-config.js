module.exports = {
  siteMetadata: {
    title: `Jared Palmer`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#000`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
  ],
};

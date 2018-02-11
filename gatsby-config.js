module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-steem',
      options: {
        tag: 'sekhmet',
        sortBy: 'blog',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};

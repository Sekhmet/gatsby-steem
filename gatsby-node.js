const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allSteemPost(filter: { author: { eq: "sekhmet" } }) {
          edges {
            node {
              permlink
            }
          }
        }
      }
    `).then(result => {
      result.data.allSteemPost.edges.forEach(({ node }) => {
        createPage({
          path: node.permlink,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            permlink: node.permlink,
          },
        });
      });
      resolve();
    });
  });
};

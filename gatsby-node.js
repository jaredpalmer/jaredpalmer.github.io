const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/post.tsx');
    const blogPostQuery = /* GraphQL */ `
      {
        allMarkdownRemark(
          limit: 1000
          filter: { frontmatter: { draft: { ne: true } } }
        ) {
          edges {
            node {
              frontmatter {
                path
                title
                description
                image
                draft
                date
              }
            }
          }
        }
      }
    `;

    resolve(
      graphql(blogPostQuery).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(edge => {
          actions.createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              pathname: edge.node.frontmatter.path,
            },
          });
        });
      })
    );
  });
};

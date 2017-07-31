const path = require('path');

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve('./src/templates/md.tsx');
//     const blogPostQuery = `
//         {
//           allMarkdownRemark(limit: 1000) {
//             edges {
//               node {
//                 frontmatter {
//                   path
//                 }
//               }
//             }
//           }
//         }
//       `;

//     resolve(
//       graphql(blogPostQuery).then(result => {
//         if (result.errors) {
//           console.log(result.errors); //eslint-disable-line
//           reject(result.errors);
//         }

//         result.data.allMarkdownRemark.edges.forEach(edge => {
//           createPage({
//             path: edge.node.frontmatter.path,
//             component: blogPost,
//             context: {
//               path: edge.node.frontmatter.path,
//             },
//           });
//         });
//       })
//     );
//   });
// };

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // Remove trailing slash
    const oldPath = page.path;
    page.path = page.path === `/` ? page.path : page.path.replace(/\/$/, ``);
    if (page.path !== oldPath) {
      // Remove the old page
      deletePage({ path: oldPath });

      // Add the new page
      createPage(page);
    }

    resolve();
  });
};

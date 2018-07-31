const path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, boundActionCreators: { createNodeField } }) => {
  if (node.internal.type === 'node__page') {
    const slug = slugify(node.title);

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allNodePage {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allNodePage.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-page.js'),
          context: {
            slug: node.fields.slug,
          },
        });
      });

      resolve();
    });
  });
};

/**
 * takes in a page name and creates a slug from it
 * @param {String} pageName
 */
function slugify(pageName) {
  return pageName.toLowerCase().replace(' ', '-');
}

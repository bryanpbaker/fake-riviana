import React from 'react';

export default ({ data }) => {
  console.log('page data', data);
  return <div>Blog Page</div>;
};

export const query = graphql`
  query PageQuery {
    allNodePage {
      edges {
        node {
          title
        }
      }
    }
  }
`;

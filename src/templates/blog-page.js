import React from 'react';
import Link from 'gatsby-link';
import Parser from 'html-react-parser';

export default ({ data }) => {
  console.log('page data', data);
  return (
    <div>
      <h1>{data.nodePage.title}</h1>
      {Parser(data.nodePage.body.processed)}
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    nodePage(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
        format
        processed
        summary
      }
    }
  }
`;

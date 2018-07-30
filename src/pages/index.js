import React, { Component } from 'react';
import Link from 'gatsby-link';

class IndexPage extends Component {
  renderArticles() {
    return this.props.data.allNodeArticle.edges.map(article => {
      return <li key={article.node.vid}>{article.node.title}</li>;
    });
  }

  render() {
    this.renderArticles();
    return (
      <div>
        <h1>Page 1</h1>
        <ul className="articles">{this.renderArticles()}</ul>
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query ArticleQuery {
    allNodeArticle {
      edges {
        node {
          vid
          title
          body {
            value
            format
            processed
            summary
          }
        }
      }
    }
  }
`;

import React, { Component } from 'react';
import Link from 'gatsby-link';

class IndexPage extends Component {
  // renderArticles() {
  //   return this.props.data.allNodeArticle.edges.map(article => {
  //     return <li key={article.node.vid}>{article.node.title}</li>;
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Page 1</h1>
        {/* <ul className="articles">{this.renderArticles()}</ul> */}
        test
      </div>
    );
  }
}

export default IndexPage;

// export const query = graphql`
//   query RecipeQuery {
//     allNodeRecipe {
//       edges
//     }
//   }
// `;

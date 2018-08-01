import React, { Component } from 'react';
import Link from 'gatsby-link';
import { inject, observer } from 'mobx-react';

@inject('TestStore')
@observer
class IndexPage extends Component {
  state = {
    title: '',
  };

  renderLinks = () =>
    this.props.data.allNodePage.edges.map(({ node }) => (
      <li key={node.id}>
        <Link to={node.fields.slug}>{node.title}</Link>
      </li>
    ));

  handleChange = event => {
    this.setState({
      title: event.target.value,
    });
  };

  changeTitle = event => {
    event.preventDefault();

    this.props.TestStore.changeTitle(this.state.title);
  };

  render() {
    return (
      <div>
        <h1>{this.props.TestStore.testProp}</h1>
        <ul>{this.renderLinks()}</ul>
        <form onSubmit={this.changeTitle}>
          <input onChange={this.handleChange} type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allNodePage {
      edges {
        node {
          id
          title
          fields {
            slug
          }
        }
      }
    }
  }
`;

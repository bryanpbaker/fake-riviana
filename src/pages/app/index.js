import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import UserProfile from './UserProfile';

class App extends Component {
  render() {
    return (
      <div>
        <h2>App Home</h2>
        <Link to="/app/profile/">Profile</Link>
        <Route path="/app/profile/" component={UserProfile} />
      </div>
    );
  }
}

export default App;

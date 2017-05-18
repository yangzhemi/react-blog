import React, { Component } from 'react';
import Home from './Home';
import Blog from './Blog';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home}/>
        <Route path="/blog" component={Blog}/>
      </div>
    );
  }
}

export default App;
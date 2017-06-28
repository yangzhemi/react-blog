import React, { Component } from 'react';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
	      <div>
	        <Route path="/home" component={Home}/>
	        <Route path="/blog" component={Blog}/>
	        <Route path="/about" component={About}/>
	      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
import React, { Component } from 'react';
import * as io from 'socket.io-client';
import SideBar from '../components/sideBar';
import '../styles/App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    // var socket = io.connect('http://localhost:3001');
    // socket.on('user',function(obj){
    //   console.log(obj)
    // });
  }

  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing home-background">
        </div>
        <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing backdrop">
          <div className="mdl-cell mdl-cell--12-col title">
            <div className="mdl-cell mdl-cell--12-col welcome">Welcome to visit</div>
            <div className="mdl-cell mdl-cell--12-col start-button-div"><Link to="/blog"><button className="start-button">
              Start</button></Link></div>
          </div>        
        </div>
      </div>
    );
  }
}

export default Home;
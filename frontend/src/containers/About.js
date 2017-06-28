import React, { Component } from 'react';
import * as io from 'socket.io-client';
import '../styles/App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class About extends Component {
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
        <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing about-background">
        </div>
        <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing about-backdrop">
          <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing home-header">
            <nav className="home-nav">
              <Link className="home-link" to="/blog"><a className="mdl-navigation__link home-link-text">Blog</a></Link>
              <Link className="home-link" to="/blog"><a className="mdl-navigation__link home-link-text">Contact</a></Link>
              <Link className="home-link" to="/about"><a className="mdl-navigation__link home-link-text">About</a></Link>       
            </nav>
          </div>
          <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing about-person-card-con">
            <div className="mdl-cell mdl-cell--2-col"></div>
            <div className="mdl-cell mdl-cell--8-col about-person-card-background">
              <div className="about-name-c">
              </div>
            </div>
          </div>     
        </div>
      </div>
    );
  }
}

export default About;